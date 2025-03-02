import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
import os
from django.conf import settings

class TokenRequestView(APIView):
    def post(self, request, *args, **kwargs):
        authorization_code = request.data.get('code')
        
        if not authorization_code:
            return Response({"error": "Authorization code is required"}, status=400)
        
        print(os.environ)

        token_url = settings.TOKEN_URL
        client_id = settings.CLIENT_ID
        client_secret = settings.CLIENT_SECRET
        redirect_uri = settings.REDIRECT_URI

        data = {
            'grant_type': 'authorization_code',
            'code': authorization_code,
            'client_id': client_id,
            'client_secret': client_secret,
            'redirect_uri': redirect_uri,
        }

        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        
        # Request access token by authorization token
        response = requests.post(token_url, data=data, headers=headers)
        
        if response.status_code == 200:
            return Response(response.json(), status=200)
        else:
            return Response({"error": "Failed to exchange authorization code"}, status=400)