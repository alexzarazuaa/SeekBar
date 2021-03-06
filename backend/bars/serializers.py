from rest_framework import serializers

from workers.serializers import WorkerSerializer
from .models import Bar, Promotions

class DynamicFieldsModelSerializer(serializers.ModelSerializer):

    def __init__(self, *args, **kwargs):
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

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

        fields=list(fields)

        try:
            self.context.get('request', None).user.worker
            fieldsToPush=['isOwner']
        except:
            fieldsToPush=['favorited', 'favoritesCount']

        for field in fieldsToPush:
            fields.insert(0, field)

        fields=tuple(fields)

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

    isOwner = serializers.SerializerMethodField()


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
            'favoritesCount',
            'isOwner'
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

    def get_isOwner(self, instance):
        request = self.context.get('request', None)

        if request is None:
            return False

        if not request.user.is_authenticated:
            return False

        return request.user.worker.isOwner(instance)

    def get_favorites_count(self, instance):
        return instance.favorited_by.count()


class BarPromotionsSerializer(serializers.ModelSerializer):
    description = serializers.CharField()
    bar = BarSerializer(read_only=True)

    createdAt = serializers.SerializerMethodField(method_name='get_created_at')
    updatedAt = serializers.SerializerMethodField(method_name='get_updated_at')


    class Meta: #Retrieve & List
        model = Promotions
        fields = (
            'idPromotion',
            'description',
            'createdAt',
            'updatedAt',
            'bar'
        )

    def create(self, data):   #Create Bar
        bar = self.context.get('bar', None)
        description=data.get('description', None)

        promotion=Promotions(description=description, bar=bar)
        promotion.save()
        return promotion
    
    def get_created_at(self, instance):
        return instance.created_at.isoformat()

    def get_updated_at(self, instance):
        return instance.updated_at.isoformat()