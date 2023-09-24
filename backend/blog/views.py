from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import Blog
from .serializers import BlogSerializer, CreateBlogSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def blog_post_list(request):
    serialized_data = BlogSerializer(Blog.objects.all(), many=True)
    return Response({'list': serialized_data.data})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def blog_post(request, pk):
    try:
        blog_post = Blog.objects.get(pk=pk)
    except Blog.DoesNotExist:
        return Response(data={"status":status.HTTP_400_BAD_REQUEST, "message":"Blog post not found"})

    serialized_data = BlogSerializer(blog_post)
    return Response(data={"status":status.HTTP_200_OK, "message":"Blog post succesfully retrieved", "data":serialized_data.data})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create(request):
    serialized_data = CreateBlogSerializer(data=request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        return Response(data={"status":status.HTTP_201_CREATED, "message":"Blog created successfully", "data":serialized_data.data})
        
    return Response(data={"status":status.HTTP_400_BAD_REQUEST, "message":serialized_data.errors})


@api_view(['PATCH', 'PUT'])
@permission_classes([IsAuthenticated])
def update(request, pk):
    try:
        blog_post = Blog.objects.get(pk=pk)
    except Blog.DoesNotExist:
        return Response(data={"status":status.HTTP_404_NOT_FOUND, "message":"Blog not found"})
    
    if request.method == 'PATCH':
        serialized_data = CreateBlogSerializer(blog_post, data=request.data, partial=True)
    elif request.method == 'PUT':
        serialized_data = CreateBlogSerializer(blog_post, data=request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        return Response(data={"status":status.HTTP_202_ACCEPTED, "message":"Blog post updated successfully", "data":serialized_data.data})
    return Response(data={"status":status.HTTP_400_BAD_REQUEST, "message":serialized_data.errors})


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request, pk):
    return Response('Delete')