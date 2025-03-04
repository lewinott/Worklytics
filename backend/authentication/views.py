# Django Rest Framework
from django.conf import settings
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import status

# Libs
import requests
import os

class TokenRequestView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            authorization_code = request.data.get('code')
            
            if not authorization_code:
                return Response({"message": "Authorization code is required"}, status=400)

            data = {
                'grant_type': 'authorization_code',
                'code': authorization_code,
                'client_id': settings.CLIENT_ID,
                'client_secret': settings.CLIENT_SECRET,
                'redirect_uri': settings.REDIRECT_URI,
            }

            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
            try:
                # Request access token by authorization token
                response = requests.post(settings.TOKEN_URL, data=data, headers=headers)
            except:
                return Response({"message": "Falha ao requisitar o código de acesso"}, status=500)
            
            if response.status_code == 200:
                try:
                    response_json = response.json()
                    access_token = response_json["access_token"]
                    refresh_token = response_json["refresh_token"]

                    token_decoded = AccessToken(access_token)
                    sub = token_decoded.get("sub")
                    user, _ = get_user_model().objects.get_or_create(username=sub,)
                    user.save()
                    
                    my_response = Response({"access_token": access_token}, status=200)
                    my_response.set_cookie(
                        key="refreshToken",
                        value=refresh_token,
                        httponly=True,
                        secure=False,
                        samesite=None,
                        max_age=7 * 24 * 60 * 60,
                    )

                    return my_response
                except TokenError as e:
                    return Response({"message": "Código de acesso inválido"}, status=400) 
            return Response({"message": "Código de autorização inválido"}, status=400)
        except:
            return Response({"message": "Erro inesperado durante o processo de autenticação"}, status=500)


class TokenRefreshView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.COOKIES.get('refreshToken')
            
            if not refresh_token:
                return Response({'message': 'Código de atualização não encontrado'}, status=status.HTTP_400_BAD_REQUEST)

            data = {
                'grant_type': 'refresh_token',
                'refresh_token': refresh_token,
                'client_id': settings.CLIENT_ID,
                'client_secret': settings.CLIENT_SECRET,
            }

            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
            try:
                # Request access token by refresh token
                response = requests.post(settings.TOKEN_URL, data=data, headers=headers)
            except:
                return Response({"message": "Falha ao requisitar o código de acesso"}, status=500)

            if response.status_code == 200:
                try:
                    response_json = response.json()
                    access_token = response_json["access_token"]
                    _ = AccessToken(access_token)

                    return Response({"access_token": access_token}, status=200)
                except TokenError as e:
                    return Response({"message": "Código de acesso inválido"}, status=400) 
            return Response({"message": "Código de atualização inválido"}, status=400)
        except:
            return Response({"message": "Erro inesperado durante o processo de autenticação"}, status=500)
            