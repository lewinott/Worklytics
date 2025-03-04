import django_filters
from .models import Ticket

class TicketFilter(django_filters.FilterSet):
    status = django_filters.CharFilter(field_name='status', lookup_expr='iexact')
    user = django_filters.CharFilter(field_name='user__username', lookup_expr='iexact')

    class Meta:
        model = Ticket
        fields = ['status', 'user']