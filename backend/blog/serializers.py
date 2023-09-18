from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Blog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class BlogSerializer(serializers.ModelSerializer):

    # created_by = UserSerializer()

    class Meta:
        model = Blog
        fields = ['id', 'title', 'blog', 'created_date', 'updated_date', 'created_by']