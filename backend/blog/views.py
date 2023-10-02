from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

from django.db.models import Q

from .models import Blog
from .serializers import BlogSerializer, CreateBlogSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def blog_post_list(request):
    paginator = PageNumberPagination()

    posts = Blog.objects.all()
    pagination_posts = paginator.paginate_queryset(posts, request)

    serialized_data = BlogSerializer(pagination_posts, many=True)
    return paginator.get_paginated_response(serialized_data.data)

@api_view(['GET'])
@permission_classes([AllowAny])
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
    try:
        blog_post = Blog.objects.get(pk=pk)
        blog_post.delete()
        return Response(data={"status":status.HTTP_200_OK, "message":"Blog post deleted"})
    except blog_post.DoesNotExist:
        return Response(data={"status":status.HTTP_404_NOT_FOUND, "message":"Blog not found"})
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def search(request):
    query = request.data['query']
    paginator = PageNumberPagination()

    try:
        results = Blog.objects.filter(Q(title__icontains=query) | Q(blog__icontains=query))

        paginated_results = paginator.paginate_queryset(results, request)

        serialized_results = BlogSerializer(paginated_results, many=True)

        # return Response(data={"status": status.HTTP_200_OK, "message": f"Search results for '{query}'.", "data": serialized_results.data})
        return paginator.get_paginated_response(serialized_results.data)
    except:
        return Response(data={"status": status.HTTP_400_BAD_REQUEST, "message": "Something went wrong"})
