from rest_framework import serializers, status
from rest_framework.exceptions import NotFound
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Worker
from .serializers import WorkerSerializer
from rest_framework import viewsets


class WorkerRetrieveAPIView(RetrieveAPIView): #Worker
    permission_classes = (AllowAny,)
    queryset = Worker.objects.select_related('user')
    serializer_class = WorkerSerializer

    def retrieve(self, request, username, *args, **kwargs):
        try:
            worker = self.queryset.get(user__username=username)
        except:
            raise NotFound('A worker with this username does not exist.')

        serializer = self.serializer_class(worker, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_200_OK)


