from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
#from .serializers import UserSerializer
from .serializers import SignUpSerializer
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
#from rest_framework.decorators import api_view
#@api_view(["GET","POST"])
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
        username = request.data.get('username')
        password = request.data.get('password')

        # Debugging print statements
        print(f"Received login request for username: {username}")
        print(f"Provided password: {password}")

        # Additional print statement to see details during authentication
        user = authenticate(request, username=username, password=password)
        print(f"Authentication result: {user}")

        if user:
            refresh = RefreshToken.for_user(user)
            data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
            return Response(data, status=status.HTTP_200_OK)
        else:
            print("User authentication failed.")
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

