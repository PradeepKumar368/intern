from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignUpSerializer,TeacherSignUpSerializer,StudentProfileSerializer,TeacherProfileSerializer
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import login,authenticate
from authentication.backends import TeacherBackend
from rest_framework_simplejwt.tokens import AccessToken
from authentication.models import Teacher,CustomUser

class SignUpView(generics.CreateAPIView):
    serializer_class = SignUpSerializer
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == status.HTTP_201_CREATED:
            user_data = response.data
            print(f"User {user_data['email']} created successfully.")
            access_token = response.data.get('access')
            print("Token Payload:", AccessToken(access_token).payload)
        return response

class LoginView(APIView):
    def post(self, request):
        identifier = request.data.get('identifier')
        password = request.data.get('password')

        print(f"Received login request for identifier: {identifier}")
        print(f"Provided password: {password}")

        user = authenticate(request, email=identifier, password=password)
        if user is None:
            user = authenticate(request, username=identifier, password=password)

        print(f"Authentication result: {user}")
        
        if user is not None:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            print(f"Token details: Refresh: {str(refresh)}, Access: {str(refresh.access_token)}")
            return Response({'message': 'Login successful!'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
class TeacherSignupView(generics.CreateAPIView):
    serializer_class = TeacherSignUpSerializer
    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == status.HTTP_201_CREATED:
            teacher_data = response.data
            print(f"Teacher {teacher_data['email']} created successfully.")
            print(teacher_data)

            try:
                teacher = Teacher.objects.get(email=teacher_data['email'])
                access_token = AccessToken.for_user(teacher)
                print("Token Payload:", access_token.payload)
            except Teacher.DoesNotExist:
                print("Teacher not found in the database.")

        return response
    
class TeacherLoginView(APIView):
    def post(self, request):
        identifier = request.data.get('identifier')
        password = request.data.get('password')

        print(f"Received login request for teacher: {identifier}")
        print(f"Provided password: {password}")

        teacher = TeacherBackend().authenticate(request, email=identifier, password=password)
        if teacher is None:
            teacher = TeacherBackend().authenticate(request, username=identifier, password=password)

        print(f"Authentication result: {teacher}")
        
        if teacher is not None:
            login(request, teacher)
            refresh = RefreshToken.for_user(teacher)
            print(f"Token details: Refresh: {str(refresh)}, Access: {str(refresh.access_token)}")
            access_token = str(refresh.access_token)
            teacher_data = {
                'message': 'Login successful!',
                'access_token': access_token,
                'user': {
                    'id': teacher.id,
                    'username': teacher.username,
                    # Add other user-related data here if needed
                }
            }

            return Response(teacher_data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
class TeacherProfileView(generics.ListAPIView):
    serializer_class = TeacherProfileSerializer
    queryset = Teacher.objects.all()
    
class StudentProfileView(generics.ListAPIView):
    serializer_class = StudentProfileSerializer
    queryset = CustomUser.objects.all()