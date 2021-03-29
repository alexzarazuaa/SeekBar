from rest_framework import serializers, status
from rest_framework.exceptions import NotFound
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from .models import Worker
from .serializers import WorkerSerializer
from rest_framework import viewsets


class WorkerRetrieveUpdateAPIView(RetrieveUpdateAPIView): #Retrieve & Update Worker
    queryset = Worker.objects.select_related('user')
    serializer_class = WorkerSerializer

    def get_permissions(self):

        if self.request.method == 'GET':
            self.permission_classes = [AllowAny, ]
        else:
            self.permission_classes = [IsAuthenticated, ]

        return super(WorkerRetrieveUpdateAPIView, self).get_permissions()

    def retrieve(self, request, username, *args, **kwargs): #Retrieve
        try:
            worker = self.queryset.get(user__username=username)
        except:
            raise NotFound('A worker with this username does not exist.')

        serializer = self.serializer_class(worker, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs): #Update Worker
        user_data = request.data.get('worker', {})

        serializer_data = {
            'dni': user_data.get('dni',request.user.worker.dni),
        }

        serializer = self.serializer_class(
            request.user.worker, data=serializer_data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_200_OK)


