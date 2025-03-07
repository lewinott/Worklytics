from django.urls import path
from .views import TokenRequestView, TokenRefreshView, LogoutView

urlpatterns = [
    path('token/', TokenRequestView.as_view(), name='token-request'),
    path('refresh_token/', TokenRefreshView.as_view(), name='refresh-token'),
    path('logout/', LogoutView.as_view(), name='logout')
]