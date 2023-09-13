from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['POST'])
def register(request):
    
    return Response({'Sign up'})