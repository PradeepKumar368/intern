from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignUpSerializer
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate,login

class SignUpView(generics.CreateAPIView):
    serializer_class = SignUpSerializer
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == status.HTTP_201_CREATED:
            # User has been created successfully
            user_data = response.data
            # You can access user data, e.g., user_data['email'], user_data['username'], etc.
            print(f"User {user_data['email']} created successfully.")
        return response

class LoginView(APIView):
    def post(self, request):
        identifier = request.data.get('identifier')
        password = request.data.get('password')

        # Debugging print statements
        print(f"Received login request for identifier: {identifier}")
        print(f"Provided password: {password}")

        user = authenticate(request, email=identifier, password=password)
        if user is None:
            # Try authenticating with username if email authentication fails
            user = authenticate(request, username=identifier, password=password)

        print(f"Authentication result: {user}")
        
        if user is not None:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            print(f"Token details: Refresh: {str(refresh)}, Access: {str(refresh.access_token)}")
            return Response({'message': 'Login successful!'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)