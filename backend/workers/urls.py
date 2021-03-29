from django.conf.urls import include, url
from django.urls import reverse
from .views import WorkerRetrieveUpdateAPIView
from rest_framework.routers import DefaultRouter

app_name = 'workers'

router = DefaultRouter()


urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^workers/(?P<username>\w+)/?$', WorkerRetrieveUpdateAPIView.as_view()), #Retrieve & Update Worker
]
