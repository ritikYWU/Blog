from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers

from .models import Blog
from .serializers import BlogSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def blog_list(request):
    serialized_data = BlogSerializer(Blog.objects.all(), many=True)
    return Response({'list': serialized_data.data})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create(request):
    return Response('create')


@api_view(['POST', 'PUT'])
@permission_classes([IsAuthenticated])
def update(request):
    return Response('Update')


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request):
    return Response('Delete')