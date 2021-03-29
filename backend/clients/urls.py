from django.conf.urls import include, url
from django.urls import reverse
from .views import ClientRetrieveAPIView
from rest_framework.routers import DefaultRouter

app_name = 'clients'

router = DefaultRouter()


urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^clients/(?P<username>\w+)/?$', ClientRetrieveAPIView.as_view()), #Client
]
