from rest_framework import serializers

from .models import Worker, Work
from bars.models import Bar

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

class WorkersInBar(serializers.ModelSerializer):
    bar = serializers.CharField(read_only=True)
    bar_id = serializers.CharField(read_only=True)
    worker_id = serializers.CharField(read_only=True)
    isBoss = serializers.BooleanField(read_only=True)
    worker = WorkerSerializer(read_only=True)

    class Meta:
        model = Work
        fields = ('bar','bar_id', 'worker_id', 'worker', 'isBoss',)

    def create(self, validated_data): #Assign Worker to Bar
        slug=self.context.get('slug', None)
        worker = self.context.get('worker', None)
        isBoss = self.context.get('isBoss', None)
        
        try:
            bar_id =Bar.objects.filter(slug=slug).values_list(flat=True)[0]
            worker=Worker.objects.select_related('user').get(user__username=worker)
        except:
             raise serializers.ValidationError(
                'This user not exist'
            )

        try:
            if self.context.get('request', None).method == 'POST':
                worker.assignWorker(bar_id, isBoss)
            elif self.context.get('request', None).method == 'DELETE':
                worker.deassign(bar_id)
            else:
                raise serializers.ValidationError('An error has occurred')
        except:
            raise serializers.ValidationError(
                'An error has occurred'
            )

        return True
