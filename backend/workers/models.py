from django.db import models
from core.models import TimestampedModel

class Worker(TimestampedModel):
    user = models.OneToOneField(
        'authentication.User', on_delete=models.CASCADE
    )
    dni = models.TextField(blank=True)
    

    referenceWorker = models.ManyToManyField(
        'bars.Bar', 
        through='Work',
        related_name='isAssign')
        
    def __str__(self):
        return self.user.username

    def assignWorker(self, bar, isBoss):
        self.referenceWorker.add(bar,through_defaults={'isBoss':isBoss})
        
class Work(models.Model):
    class Meta:
            unique_together=('worker','bar')

    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    bar = models.ForeignKey('bars.Bar', on_delete=models.CASCADE)
    isBoss = models.BooleanField()


    