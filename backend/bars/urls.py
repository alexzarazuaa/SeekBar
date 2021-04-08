from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (
    BarViewSet
)

app_name = 'bars'

router = DefaultRouter()
router.register(r'bars', BarViewSet) #Retrieve & List & Create Bar

urlpatterns = [
    url(r'^', include(router.urls)),
]
