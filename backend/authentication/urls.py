from django.urls import path
from .views import TokenRequestView

urlpatterns = [
    path('token/', TokenRequestView.as_view(), name='token-request'),
]