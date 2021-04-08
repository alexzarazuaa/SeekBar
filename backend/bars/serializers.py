from rest_framework import serializers

from workers.serializers import WorkerSerializer
from .models import Bar

class BarSerializer(serializers.ModelSerializer):#Retrieve & List & Create Bar
    slug = serializers.SlugField(required=False)
    description = serializers.CharField(required=False)
    phone_number = serializers.CharField(required=False)
    location = serializers.CharField(required=False)
    valoration = serializers.DecimalField(required=False, max_digits=2, decimal_places=1)
    image = serializers.ImageField(required=False)

    owner= WorkerSerializer(read_only=True)
    createdAt = serializers.SerializerMethodField(method_name='get_created_at')
    updatedAt = serializers.SerializerMethodField(method_name='get_updated_at')

    class Meta: #Retrieve & List
        model = Bar
        fields = (
            'slug',
            'name',
            'description',
            'phone_number',
            'location',
            'valoration',
            'image',
            'createdAt',
            'updatedAt',
            'owner'
        )

    def create(self, validated_data):   #Create Bar
        owner = self.context.get('owner', None)
        bar = Bar.objects.create(**validated_data)
        owner.assignWorker(bar, True)
        return bar

    def get_created_at(self, instance):
        return instance.created_at.isoformat()

    def get_updated_at(self, instance):
        return instance.updated_at.isoformat()