from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status

from .serializers import RegisterSerializers


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def register(request):
    serialized_data = RegisterSerializers(data=request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        return Response(data={'message': 'User created successfully.', 'user': serialized_data.data}, status=status.HTTP_201_CREATED)
    
    return Response(data={'message': serialized_data.errors}, status=status.HTTP_400_BAD_REQUEST)
