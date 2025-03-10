# Django Rest Framework
from django.conf import settings
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.exceptions import TokenError
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
                return Response({"message": "Authorization code is required"}, status=status.HTTP_400_BAD_REQUEST)

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
            except Exception as e:
                print(e)
                return Response({"message": "Falha ao requisitar o código de acesso"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            if response.status_code == 200:
                try:
                    response_json = response.json()
                    access_token = response_json["access_token"]
                    refresh_token = response_json["refresh_token"]

                    token_decoded = AccessToken(access_token)
                    sub = token_decoded.get("sub")
                    user, _ = get_user_model().objects.get_or_create(username=sub,)
                    user.save()
                    
                    my_response = Response({"access_token": access_token}, status=status.HTTP_200_OK)
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
                    print(e)
                    return Response({"message": "Código de acesso inválido"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
            return Response({"message": "Código de autorização inválido"}, status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Response({"message": "Erro inesperado durante o processo de autenticação"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TokenRefreshView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.COOKIES.get('refreshToken')
            
            if not refresh_token:
                return Response({'message': 'Código de atualização não encontrado'}, status=status.HTTP_401_UNAUTHORIZED)

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
                return Response({"message": "Falha ao requisitar o código de acesso"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            if response.status_code == 200:
                try:
                    response_json = response.json()
                    access_token = response_json["access_token"]
                    _ = AccessToken(access_token)
                
                    return Response({"access_token": access_token}, status=status.HTTP_200_OK)
                except TokenError as e:
                    
                    return Response({"message": "Código de acesso inválido"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
            return Response({"message": "Código de atualização inválido"}, status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Response({"message": "Erro inesperado durante o processo de autenticação"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refreshToken")

        if not refresh_token:
            return Response({"message": "Nenhum token de atualização encontrado"}, status=status.HTTP_400_BAD_REQUEST)

        logout_url = f"{settings.KEYCLOAK_URL}/realms/{settings.KEYCLOAK_REALM}/protocol/openid-connect/logout"

        data = {
            "client_id": settings.CLIENT_ID,
            "client_secret": settings.CLIENT_SECRET,
            "refresh_token": refresh_token,
        }

        response = requests.post(logout_url, data=data)

        if response.status_code in [200, 204]:
            return Response({"message": "Usuário deslogado com sucesso"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Erro ao deslogar usuário"}, status=response.status_code)