from django.urls import path
from . import views

urlpatterns = [
    path('user/register/', views.register, name='register'),
    path('change-password/', views.change_password, name='change password'),
    path('user/<str:username>/', views.get_user_detail, name='user-detail')
]