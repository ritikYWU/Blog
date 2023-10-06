from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status

from .serializers import RegisterSerializers,UpdatePasswordSerializers,UserModelSerializer


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def register(request):
    password = request.data.get('password')
    request.data['password'] = make_password(password)
    
    serialized_data = RegisterSerializers(data=request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        return Response(data={'message': 'User created successfully.', 'user': serialized_data.data}, status=status.HTTP_201_CREATED)
    
    return Response(data={'message': serialized_data.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def change_password(request):
    serialized_data = UpdatePasswordSerializers(data=request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        return Response(data={'message': 'Password updated successfully.', 'user': serialized_data.data}, status=status.HTTP_200_OK) 

    return Response(data={'message':serialized_data.error_messages})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_detail(request, username):
    user_detail = User.objects.get(username=username)
    serialized_data = UserModelSerializer(user_detail, many=False)
    return Response(serialized_data.data)

