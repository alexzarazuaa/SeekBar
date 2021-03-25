from django.db.models.signals import post_save
from django.dispatch import receiver

# from clients.models import Client
# from workers.models import Worker

from .models import User

#@receiver(post_save, sender=User)
# def create_related_profile(sender, instance, created, *args, **kwargs):
#     if instance and created:
#         instance.profile = Profile.objects.create(user=instance)
