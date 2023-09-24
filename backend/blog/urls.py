from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.blog_post_list, name='blog-list'),
    path('posts/<int:pk>/', views.blog_post, name='blog'),
    path('create/', views.create, name='create'),
    path('update/<int:pk>/', views.update, name='update'),
    path('delete/', views.delete, name='delete'),
    path('search/', views.search, name='serach blog')
]