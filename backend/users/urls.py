from django.urls import path
from . import views

urlpatterns = [
    # path('user/', views.check, name='check'),
    path('login/',views.login, name='login'),
    path('register/',views.register, name='register'),
    path('test_token/',views.test_token, name='token'),

]