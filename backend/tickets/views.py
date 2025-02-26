from rest_framework import viewsets
from .models import Ticket
from .serializers import TicketSerializer
from .filters import TicketFilter
from django_filters.rest_framework import DjangoFilterBackend

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TicketFilter
