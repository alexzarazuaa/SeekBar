from django.db.models.signals import post_save
from django.dispatch import receiver

from clients.models import Client

from .models import User

@receiver(post_save, sender=User)
def create_related_profile(sender, instance, created, *args, **kwargs):
  type = getattr(instance, 'type', '')
  if instance and created:
    if type == 'client':
      instance.client = Client.objects.create(user=instance)