from rest_framework import serializers

from workers.serializers import WorkerSerializer
from .models import Bar

class DynamicFieldsModelSerializer(serializers.ModelSerializer):

    def __init__(self, *args, **kwargs):
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        try:
            self.context.get('request', None).user.worker
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
        )
        except:
            fields = None

        if fields is not None:
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)

class BarSerializer(DynamicFieldsModelSerializer):#Retrieve & List & Create Bar
    slug = serializers.SlugField(required=False)
    description = serializers.CharField(required=False)
    phone_number = serializers.CharField(required=False)
    location = serializers.CharField(required=False)
    valoration = serializers.DecimalField(required=False, max_digits=2, decimal_places=1)
    image = serializers.CharField(required=False)

    favorited = serializers.SerializerMethodField()
    favoritesCount = serializers.SerializerMethodField(
        method_name='get_favorites_count'
    )

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
            'favorited',
            'favoritesCount'
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

    def get_favorited(self, instance):
        request = self.context.get('request', None)

        if request is None:
            return False

        if not request.user.is_authenticated:
            return False

        return request.user.client.has_favorited(instance)

    def get_favorites_count(self, instance):
        return instance.favorited_by.count()