from rest_framework import viewsets
from .models import Ticket
from .serializers import TicketSerializer
from .filters import TicketFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework import status

class TicketViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TicketFilter

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