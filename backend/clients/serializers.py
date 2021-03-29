from rest_framework import serializers

from .models import Client

class ClientSerializer(serializers.ModelSerializer): #Client
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email')
    name = serializers.CharField(source='user.name')
    phone_number = serializers.CharField(source='user.phone_number')
    image = serializers.CharField(source='user.image')


    class Meta:
        model = Client
        fields = ('username', 'email', 'name', 'phone_number', 'image')
        read_only_fields = ('username','email','name','phone_number','image')
