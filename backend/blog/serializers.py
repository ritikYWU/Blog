from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Blog


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class BlogSerializer(serializers.ModelSerializer):

    created_by = UserSerializer()

    class Meta:
        model = Blog
        fields = ['id', 'title', 'blog', 'created_date',
                  'updated_date', 'created_by', 'picture']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['blog'] = data['blog'].replace('\\n', '\n')
        data['picture'] = 'http://127.0.0.1:8000'+ data['picture']
 
        return data


class CreateBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'blog', 'created_date',
                  'updated_date', 'created_by', 'picture']
