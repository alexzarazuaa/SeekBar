from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import User
from .renderers import UserJSONRenderer
from .serializers import (
    LoginSerializer, RegistrationSerializer, UserSerializer
)


class RegistrationAPIView(APIView): #Register
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = RegistrationSerializer

    def post(self, request, type='None'):
        user = request.data.get('user', {})
        serializer = self.serializer_class(data=user, context={'type': type})
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LoginAPIView(APIView): #Login & Deactive & Reactive User
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = LoginSerializer

    def post(self, request): #Login
        user = request.data.get('user', {})
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request): #Deactive User
        user = request.data.get('user', {})
        serializer = self.serializer_class(data=user)

        if serializer.is_valid(raise_exception=True):
            serializer = self.serializer_class.deactivate(data=user)

        return Response(serializer, status=status.HTTP_200_OK)
    
    def put(self, request): #Reactivate User
        user = request.data.get('user', {})
        serializer = self.serializer_class.reactivate(data=user)

        return Response(serializer, status=status.HTTP_200_OK)


class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView): #Retrieve & Update User
    permission_classes = (IsAuthenticated,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs): #Retrieve
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs): #Update User
        user_data = request.data.get('user', {})

        serializer_data = {
            'name': user_data.get('name', request.user.name),
            'phone_number':user_data.get('phone_number', request.user.phone_number),
            'image':user_data.get('image', request.user.image),
            'email':user_data.get('email', request.user.email),
            'username':user_data.get('username', request.user.username),
            'password':user_data.get('password', request.user.password),
        }

        serializer = self.serializer_class(
            request.user, data=serializer_data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_200_OK)
 