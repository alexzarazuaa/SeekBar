from rest_framework import mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from .models import Worker, Work
from .serializers import WorkerSerializer, WorkersInBar
from core.permissions import IsOwnerOrAdmin


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

class WorkersWorkBarViewSet(viewsets.ModelViewSet): #List Workers & Assign Worker to bar
    queryset = Work.objects.all()
    serializer_class = WorkersInBar

    def get_permissions(self):
        self.permission_classes = [IsOwnerOrAdmin,]

        return super(WorkersWorkBarViewSet, self).get_permissions()

    def get_queryset(self): #List Workers
        slug = self.request.GET.get('slug')
        self.check_object_permissions(self.request, slug)
        
        if slug is None:
            return Work.objects.all().order_by('bar_id') 
        return self.queryset.filter(bar__slug=slug).order_by('bar_id') 

    def create(self, request): #Assign Worker to Bar
        serializer_data = request.data.get('info', {})
        self.check_object_permissions(request, serializer_data['slug'])
        try:
            isBoss=serializer_data['isBoss']
        except:
            isBoss=False

        serializer_context = {
            'slug':serializer_data['slug'],
            'worker': serializer_data['worker'],
            'isBoss': isBoss,
            'request': request
        }

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response('Ok',status=status.HTTP_200_OK)

    def delete(self, request): #Assign Worker to Bar
        return self.create(request)
