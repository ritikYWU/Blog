from django.contrib.auth.models import User

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token
    

class RegisterSerializers(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

class UpdatePasswordSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['username', 'password']

    def update(self, instance, data):
        instance.username = data.get('username')
        new_password = data.get('password')
        instance.set_password(new_password)

        instance.save()

        return instance
    
class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']