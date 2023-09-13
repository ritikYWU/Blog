
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('users.urls')),
    path('api/', include('auth_jwt.urls')),
    path('api/login/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/login/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
