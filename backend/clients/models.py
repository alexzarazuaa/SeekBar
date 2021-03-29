from django.db import models
from core.models import TimestampedModel

class Client(TimestampedModel):
    user = models.OneToOneField(
        'authentication.User', on_delete=models.CASCADE
    )

    def __str__(self):
        return self.user.username


