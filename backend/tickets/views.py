from rest_framework import viewsets
from .models import Ticket
from .serializers import TicketSerializer
from .filters import TicketFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework_simplejwt.tokens import AccessToken

class TicketViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TicketFilter

    def get_queryset(self):
        try:
            auth_header = self.request.headers.get("Authorization", None)
        
            if not auth_header or not auth_header.startswith("Bearer "):
                return []

            access_token = auth_header.split(" ")[1]
            token_decoded = AccessToken(access_token)        
            roles = token_decoded.get("realm_access", {}).get("roles", []) 
            
            if "admin" in roles:
                return Ticket.objects.all()
            
            try:
                sub = token_decoded.get("sub")
                user = get_user_model().objects.get(username=sub)
            except:
                Response({"message": "Usuário não encontrado."}, status=status.HTTP_400_BAD_REQUEST)

            return Ticket.objects.filter(user=user)
        except:
            Response({"message": "Não foi possível resgatar os tickets."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        

    def perform_create(self, serializer):
        username = self.request.data.get('user')

        if username:
            try:
                user = get_user_model().objects.get(username=username)
                serializer.save(user=user)
            except get_user_model().DoesNotExist as e:
                return Response({"message": "Usuário não encontrado."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"message": "O campo usuário é obrigatório."}, status=status.HTTP_400_BAD_REQUEST)