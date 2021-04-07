from rest_framework import serializers


from .models import Bar

class BarSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False)
    description = serializers.CharField(required=False)
    phone_number = serializers.CharField(required=False)
    location = serializers.CharField(required=False)
    valoration = serializers.CharField(required=False)
    image = serializers.CharField(required=False)

    createdAt = serializers.SerializerMethodField(method_name='get_created_at')
    updatedAt = serializers.SerializerMethodField(method_name='get_updated_at')

    class Meta:
        model = Bar
        fields = (
            'slug',
            'name',
            'description',
            'phone_number',
            'location',
            'valoration',
            'image',
            'owner',
            'createdAt',
            'updatedAt',
        )

    # def create(self, validated_data):
        # owner = self.context.get('owner', None)

        # bar = Bar.objects.create(owner=owner, **validated_data)

        # return bar

    def get_created_at(self, instance):
        return instance.created_at.isoformat()

    def get_updated_at(self, instance):
        return instance.updated_at.isoformat()