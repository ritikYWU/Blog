from rest_framework import serializers
from django.contrib.auth.models import User

class LoginSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User 
        fields = ['username', 'password']

class RegisterSerializers(serializers.ModelSerializer):

    # adding password 2 for verification on hold
    # password2 = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

    # def check_password(self,passwords):
    #     if passwords['password'] != passwords['password2']:
    #         raise serializers.ValidationError({"Error":"Password should be same"})

    #     return passwords
    
    # def create(self, validate_data):
    #     user = User.objects.create(
    #         username = validate_data['username'],
    #         email = validate_data['email']
    #     )
    #     user.set_password(validate_data['password'])
    #     user.save()

    #     return user
        