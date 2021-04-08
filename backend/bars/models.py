from django.db import models

from core.models import TimestampedModel


class Bar(TimestampedModel):
    slug = models.SlugField(db_index=True, max_length=255, unique=True)
    name = models.CharField(db_index=True, max_length=255)
    description = models.TextField()
    phone_number= models.CharField(max_length=14)
    location= models.CharField(max_length=255)
    valoration= models.DecimalField(max_digits=2, decimal_places=1, default=0.0)
    image= models.ImageField(max_length=255)
    
    def __str__(self):
        return self.name
