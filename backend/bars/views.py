from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound

from rest_framework.permissions import IsAuthenticated

from core.permissions import IsWorker

from .models import Bar
from .renderers import BarJSONRenderer
from .serializers import BarSerializer

class BarViewSet(viewsets.ModelViewSet): #Retrieve & List & Create Bar
    queryset = Bar.objects.all()
    serializer_class = BarSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        queryset= self.queryset
        
        favorited_by = self.request.query_params.get('favorited', "")
        if favorited_by is not "":
            queryset = queryset.filter(
                favorited_by__user__username=favorited_by
            )

        return queryset


    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [IsWorker,]

        return super(BarViewSet, self).get_permissions()

    def create(self, request):   #Create Bar
        self.check_object_permissions(request,"")

        serializer_context = {
            'owner': request.user.worker,
            'request': request
        }
        serializer_data = request.data.get('bar', {})

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class BarsFavoriteAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (BarJSONRenderer,)
    serializer_class = BarSerializer

    def post(self, request, bar_slug=None):
        client = self.request.user.client
        serializer_context = {'request': request}

        try:
            bar = Bar.objects.get(slug=bar_slug)
        except Bar.DoesNotExist:
            raise NotFound('An bar with this slug was not found.')

        client.favorite(bar)

        serializer = self.serializer_class(bar, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, bar_slug=None):
        client = self.request.user.client
        serializer_context = {'request': request}

        try:
            bar = Bar.objects.get(slug=bar_slug)
        except Bar.DoesNotExist:
            raise NotFound('An bar with this slug was not found.')

        client.unfavorite(bar)

        serializer = self.serializer_class(bar, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)