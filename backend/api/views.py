from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignUpSerializer, TeacherSignUpSerializer
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from django.contrib.auth import login, authenticate
from django.http import JsonResponse
from authentication.backends import TeacherBackend
from authentication.models import Teacher, CustomUser
from rest_framework.permissions import IsAuthenticated

class SignUpView(generics.CreateAPIView):
    serializer_class = SignUpSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == status.HTTP_201_CREATED:
            user_data = response.data
            print(f"User {user_data['email']} created successfully.")
            access_token = response.data.get('access')
            print("Token Payload:", AccessToken(access_token).payload)
            
            # Set access token in cookies
            response.set_cookie('auth_token', access_token)
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
            access_token = str(refresh.access_token)
            student_data = {
                'message': 'Login successful!',
                'access_token': access_token,
                'user': {
                    'id': user.id,
                    'username': user.username,
                    # Add other user-related data here if needed
                }
            }

            # Set access token in cookies
            response = JsonResponse(student_data)
            response.set_cookie('auth_token', access_token)
            return response
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

                # Construct the desired response data
                teacher_data_response = {
                    'access_token': str(access_token),
                    'user': {
                        'id': teacher.id,
                        'username': teacher.username,
                        # Add other user-related data here if needed
                    }
                }

                # Return the constructed response data
                response = JsonResponse(teacher_data_response)

                # Set access token in cookies
                response.set_cookie('auth_token', str(access_token))
                return response

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

            # Set access token in cookies
            response = JsonResponse(teacher_data)
            response.set_cookie('auth_token', access_token)
            return response
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class TeacherProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = TeacherSignUpSerializer
    queryset = Teacher.objects.all()

    def get_object(self):
        teacher_id = self.kwargs.get('pk')
        return self.get_queryset().get(id=teacher_id)

class StudentProfileView(generics.RetrieveAPIView):
    serializer_class = StudentProfileSerializer
    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        # Update only the fields that are present in the request data
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        # Extract required data from the request
        current_password = request.data.get('current_password')
        new_password = request.data.get('new_password')
        confirm_password = request.data.get('confirm_password')

        # Check if current password is correct
        if not request.user.check_password(current_password):
            return Response({'error': 'Current password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if new password and confirm password match
        if new_password != confirm_password:
            return Response({'error': 'New password and confirm password do not match.'}, status=status.HTTP_400_BAD_REQUEST)

        # Update the password
        request.user.set_password(new_password)
        request.user.save()

        return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)

class StudentProfileView(generics.ListAPIView):
    serializer_class = SignUpSerializer
    queryset = CustomUser.objects.all()

    def get_object(self):
        CustomUser_id = self.kwargs.get('pk')
        return self.get_queryset().get(id=CustomUser_id)
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        # Update only the fields that are present in the request data
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)