from django.db import models
from core.models import TimestampedModel
from bars.models import Bar

class Client(TimestampedModel):
    user = models.OneToOneField(
        'authentication.User', on_delete=models.CASCADE
    )

    def __str__(self):
        return self.user.username

    favorites = models.ManyToManyField(
        Bar,
        related_name='favorited_by'
    )

    def favorite(self, bar):
        self.favorites.add(bar)

    def unfavorite(self, bar):
        self.favorites.remove(bar)

    def has_favorited(self, bar):
        return self.favorites.filter(pk=bar.pk).exists()