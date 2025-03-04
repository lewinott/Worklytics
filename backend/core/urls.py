from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('tickets/', include("tickets.urls")),
    path('auth/', include("authentication.urls"))
]
