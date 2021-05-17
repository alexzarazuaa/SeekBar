from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound

from rest_framework.permissions import IsAuthenticated

from core.permissions import IsWorker, IsWorkerInBAR

from .models import Bar, Promotions
from .renderers import BarJSONRenderer
from .serializers import BarSerializer, BarPromotionsSerializer

class BarViewSet(viewsets.ModelViewSet): #Retrieve & List & Create Bar
    queryset = Bar.objects.all()
    serializer_class = BarSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        queryset= self.queryset
        
        favorited_by = self.request.query_params.get('favorited', None)
        if favorited_by is not None and favorited_by != "" :
            queryset = queryset.filter(
                favorited_by__user__username=favorited_by
            )
        
        try:
            queryset=self.request.user.worker.referenceWorker.all()
        except:
            False

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

class BarsFavoriteAPIView(APIView): #Favorite & Unfavorite
    permission_classes = (IsAuthenticated,)
    renderer_classes = (BarJSONRenderer,)
    serializer_class = BarSerializer

    def post(self, request, bar_slug=None): #Favorite 
        client = self.request.user.client
        serializer_context = {'request': request}

        try:
            bar = Bar.objects.get(slug=bar_slug)
        except Bar.DoesNotExist:
            raise NotFound('An bar with this slug was not found.')

        client.favorite(bar)

        serializer = self.serializer_class(bar, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, bar_slug=None): #Unfavorite
        client = self.request.user.client
        serializer_context = {'request': request}

        try:
            bar = Bar.objects.get(slug=bar_slug)
        except Bar.DoesNotExist:
            raise NotFound('An bar with this slug was not found.')

        client.unfavorite(bar)

        serializer = self.serializer_class(bar, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)


class BarsPromotionViewSet(viewsets.ModelViewSet):
    queryset = Promotions.objects.filter(is_active=True)
    serializer_class = BarPromotionsSerializer


    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [IsWorkerInBAR,]
        
        return super(BarsPromotionViewSet, self).get_permissions()

    def get_queryset(self):
        slug=self.request.query_params.get('slug', None)
        if slug is None:
            return self.queryset
        return self.queryset.filter(bar__slug=slug)
    
    def create(self, request):   #Create Bar Prmotion
        slug=self.request.query_params.get('slug', None)

        try:
            bar = Bar.objects.get(slug=slug)
        except Bar.DoesNotExist:
            raise NotFound('An bar with this slug was not found.')

        self.check_object_permissions(request, bar)

        serializer_context = {'bar': bar}
        serializer_data = request.data.get('promotion', {})
        serializer = self.serializer_class(data=serializer_data, context=serializer_context)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)