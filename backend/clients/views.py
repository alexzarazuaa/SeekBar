from rest_framework import serializers, status
from rest_framework.exceptions import NotFound
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Client
from .serializers import ClientSerializer
from rest_framework import viewsets


class ClientRetrieveAPIView(RetrieveAPIView): #Client
    permission_classes = (AllowAny,)
    queryset = Client.objects.select_related('user')
    serializer_class = ClientSerializer

    def retrieve(self, request, username, *args, **kwargs):
        try:
            client = self.queryset.get(user__username=username)
        except:
            raise NotFound('A client with this username does not exist.')

        serializer = self.serializer_class(client, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_200_OK)


