from rest_framework import serializers

from .models import Worker

class WorkerSerializer(serializers.ModelSerializer): #Worker
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email')
    name = serializers.CharField(source='user.name')
    phone_number = serializers.CharField(source='user.phone_number')
    image = serializers.CharField(source='user.image')
    dni = serializers.CharField(allow_null=True)

    class Meta:
        model = Worker
        fields = ('username', 'email', 'name', 'phone_number', 'image', 'dni')

    def update(self, instance, validated_data): #Update Worker

        for (key, value) in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        
        return instance