
from django.conf.urls import include, url
from django.urls import reverse
from .views import (
    LoginAPIView, RegistrationAPIView, UserRetrieveUpdateAPIView
)
from rest_framework.routers import DefaultRouter


app_name = 'authentication'

router = DefaultRouter()

#Admin
# router.register(r'^userlist', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^user/(?P<type>[-\w]+)/?$', RegistrationAPIView.as_view()), #Register
    url(r'^users/login/?$', LoginAPIView.as_view()), #Login & Deactivate User
    url(r'^user/?$', UserRetrieveUpdateAPIView.as_view()), #Retrieve & Update User
]
