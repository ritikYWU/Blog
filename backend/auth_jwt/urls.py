from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('change-password/', views.change_password, name='change password')
]