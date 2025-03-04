from django.urls import path
from .views import TokenRequestView, TokenRefreshView

urlpatterns = [
    path('token/', TokenRequestView.as_view(), name='token-request'),
    path('refresh_token/', TokenRefreshView.as_view(), name='refresh-token')
]