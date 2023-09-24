from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.blog_post_list, name='list'),
    path('create/', views.create, name='create'),
    path('update/<int:pk>/', views.update, name='update'),
    path('delete/', views.delete, name='delete'),
    path('post/<int:pk>/', views.blog_post, name='single')
]