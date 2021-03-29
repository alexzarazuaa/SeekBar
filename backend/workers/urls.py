from django.conf.urls import include, url
from django.urls import reverse
from .views import WorkerRetrieveAPIView
from rest_framework.routers import DefaultRouter

app_name = 'workers'

router = DefaultRouter()


urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^workers/(?P<username>\w+)/?$', WorkerRetrieveAPIView.as_view()), #Worker
]
