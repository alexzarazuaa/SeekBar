from django.db import models
from core.models import TimestampedModel
from bars.models import Bar
class Worker(TimestampedModel):
    user = models.OneToOneField(
        'authentication.User', on_delete=models.CASCADE
    )
    dni = models.TextField(blank=True)
    

    referenceWorker = models.ManyToManyField(
        Bar, 
        through='Work',
        related_name='isAssign')
        
    def __str__(self):
        return self.user.username

    def assignWorker(self, bar, isBoss):
        if isBoss is not False and isBoss is not True:
            isBoss = False
        self.referenceWorker.add(bar,through_defaults={'isBoss':isBoss})
    
    def deassign(self, bar):
        self.referenceWorker.remove(bar)

class Work(models.Model):
    class Meta:
            unique_together=('worker','bar')

    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    bar = models.ForeignKey('bars.Bar', on_delete=models.CASCADE)
    isBoss = models.BooleanField()

    def __str__(self):
        return self.worker
    