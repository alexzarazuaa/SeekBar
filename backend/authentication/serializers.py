from django.contrib.auth import authenticate

from rest_framework import serializers

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

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'token', 'name', 'phone_number', 'image']

    def create(self, validated_data):
        type = self.context.get('type', None)
        User.algo=type
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer): #Login / Deactive User
    email = serializers.CharField(read_only=True)
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    name = serializers.CharField(read_only=True)
    phone_number = serializers.CharField(read_only=True)
    image = serializers.CharField(read_only=True)
    info  = serializers.CharField(read_only=True)


    def validate(self, data):
        username = data.get('username', None)
        password = data.get('password', None)

        if username is None:
            raise serializers.ValidationError(
                'An username is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        method = self.context.get('method', None)

        if method == "POST": #Login
            return {
                'email': user.email,
                'username': user.username,
                'token': user.token,
                'name': user.name,
                'phone_number': user.phone_number,
                'image': user.image,
            }
        elif method == "DELETE": #Deactivate User
            try:
                user.is_active = False
                user.save()
                return {
                    'username': user.username,
                    'info': 'user ' + user.username + ' successfully disabled',
                }
            except:
                raise serializers.ValidationError(
                    'An error occurred when disabling the user'
                )


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
