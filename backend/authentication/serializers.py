from django.contrib.auth import authenticate

from rest_framework import serializers
from clients.serializers import ClientSerializer

from .backends import JWTAuthentication
from .models import User


class RegistrationSerializer(serializers.ModelSerializer): #Register

    password = serializers.CharField(
        max_length=128,
        min_length=3,
        write_only=True
    )

    token = serializers.CharField(max_length=255, read_only=True)
    phone_number= serializers.CharField(required=False)
    image= serializers.CharField(required=False)
    check = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'token', 'name', 'phone_number', 'image', 'check']

    def create(self, validated_data):
        type = self.context.get('type', None)
        User.type=type
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer): #Login & Deactive & Reactivate User
    email = serializers.CharField(read_only=True)
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    name = serializers.CharField(read_only=True)
    phone_number = serializers.CharField(read_only=True)
    image = serializers.CharField(read_only=True)
    info  = serializers.CharField(read_only=True)
    check  = serializers.CharField(read_only=True)

    def validate(self, data): #Login
        username = data.get('username')
        password = data.get('password')
        user = JWTAuthentication.login(username=username, password=password)

        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        if not user.is_active:    
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        try:
            user.worker
            value='Worker'
        except: 
            value='Client'

        return {
            'email': user.email,
            'username': user.username,
            'token': user.token,
            'name': user.name,
            'phone_number': user.phone_number,
            'image': user.image,
            'check': value
        }

    def deactivate(data): #Deactive User
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
            
        try:
            user.is_active = False
            user.save()
        except:
            raise serializers.ValidationError(
                    'An error occurred when disabling the user'
            )

        return {
            'username': user.username,
            'info': 'user ' + user.username + ' successfully disabled',
        }

    def reactivate(data): #Reactivate User
        username = data.get('username')
        password = data.get('password')
        user = JWTAuthentication.login(username=username, password=password)

        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        if user.is_active:  
            raise serializers.ValidationError(
                'This user is actived'
            )

        try:
            user.is_active = True
            user.save()
        except:
            raise serializers.ValidationError(
                    'An error occurred when reactivate the user'
            )

        return {
            'username': user.username,
            'info': 'user ' + user.username + ' successfully activated',
        }

class UserSerializer(serializers.ModelSerializer): #Retrieve & Update User

    password = serializers.CharField(
        max_length=128,
        min_length=3,
        write_only=True
    )

    username = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    name = serializers.CharField()
    phone_number= serializers.CharField(max_length=14, allow_null=True)
    image= serializers.CharField(max_length=255, allow_null=True)

    class Meta:
        model = User
        fields = (
            'username', 'email', 'password', 'token', 'name', 'phone_number', 'image'
        )
    
        read_only_fields = ('token',)


    def update(self, instance, validated_data): #Update User
        password = validated_data.pop('password', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance
