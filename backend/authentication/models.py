import jwt

from datetime import datetime, timedelta

from django.conf import settings
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)
from django.db import models

from core.models import TimestampedModel


class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, name=None, phone_number=None, image=None ):
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            name=name,
            phone_number=phone_number,
            image=image)
            
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):

      if password is None:
          raise TypeError('Superusers must have a password.')

      user = self.create_user(username, email, password)
      user.is_superuser = True
      user.is_staff = True
      user.save()

      return user


class User(AbstractBaseUser, PermissionsMixin, TimestampedModel):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    phone_number= models.CharField(max_length=14, null=True, blank=True)
    image= models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

   
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']


    objects = UserManager()

    def __str__(self):
        return self.username

    @property
    def token(self):
        return self._generate_jwt_token()

    @property
    def checkType(self):
        try:
            user.worker
            return 'Worker'
        except: 
            return 'Client'

    def get_full_name(self):
      return self.username

    def get_short_name(self):
        return self.username

    def _generate_jwt_token(self):
        dt = datetime.now() + timedelta(days=60)

        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')
