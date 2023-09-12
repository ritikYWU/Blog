from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import RegisterSerializers, LoginSerializers

    
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])

    if user.check_password(request.data['password']):
        token, created = Token.objects.get_or_create(user=user)
        serialized_data = LoginSerializers(user)
        return Response({"status":status.HTTP_200_OK, 'token': token.key, "user":serialized_data.data})
    
    return Response({"status":status.HTTP_400_BAD_REQUEST,"error":"Username or Password didn't match"})

@api_view(['POST'])
def register(request):
    serialized_data = RegisterSerializers(data=request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        user = User.objects.get(username=request.data['username'])
        token = Token.objects.create(user=user)
        return Response({"status":status.HTTP_200_OK, "token":token.key, "user":serialized_data.data})
    
    return Response({"status":status.HTTP_400_BAD_REQUEST, "error": serialized_data.errors})

@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({'test token'})

