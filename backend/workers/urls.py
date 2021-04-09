from django.conf.urls import include, url
from .views import WorkerRetrieveUpdateAPIView, WorkersWorkBarViewSet
from rest_framework.routers import DefaultRouter

app_name = 'workers'

router = DefaultRouter()
router.register(r'workers/assignbar', WorkersWorkBarViewSet) #List Workers & Assign Worker to Bar


urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^workers/(?P<username>\w+)/?$', WorkerRetrieveUpdateAPIView.as_view()), #Retrieve & Update Worker
]
