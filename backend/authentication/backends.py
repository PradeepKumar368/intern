from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from authentication.models import Teacher,CustomUser

class EmailBackend(ModelBackend):
    def authenticate(self, request, email=None, username=None, password=None, **kwargs):
        # CustomUser = get_user_model()
        
        print("Testing if the user authenticate method is being called.")
        print(f"Email: {email}, Username: {username}, Password: {password}")

        if email:
            try:
                user = CustomUser.objects.get(email=email)
                
                print(f"User found by email: {user}")
            except CustomUser.DoesNotExist:
                print("User not found by email.")
                return None
        # Attempt to authenticate with username
        elif username:
            try:
                user = CustomUser.objects.get(username=username)
                print(f"User found by username: {user}")
            except CustomUser.DoesNotExist:
                print("User not found by username.")
                return None
        else:
            return None
        
        print(f"User's password hash: {user.password}")
        
        if user.check_password(password) and self.user_can_authenticate(user):
            print("Password check passed.")
            return user

        print("Password check failed.")
        return None

class TeacherBackend(ModelBackend):
    def authenticate(self, request, email=None, username=None, password=None, **kwargs):
        TeacherModel = Teacher
        print("Testing if the teacher backend authenticate method for Teacher is being called.")
        print(f"Email: {email}, Username: {username}, Password: {password}")

        if email:
            try:
                teacher = TeacherModel.objects.get(email=email)
                print(f"teacher found by email: {teacher}")
            except TeacherModel.DoesNotExist:
                print("teacher not found by email.")
                return None
        # Attempt to authenticate with username
        elif username:
            try:
                teacher = TeacherModel.objects.get(username=username)
                print(f"teacher found by username: {teacher}")
            except TeacherModel.DoesNotExist:
                print("teacher not found by username.")
                return None
        else:
            return None
        
        print(f"Teacher's password hash: {teacher.password}")
        
        if teacher.check_password(password) and self.user_can_authenticate(teacher):
            print("Password check passed.")
            teacher.backend = "authentication.backends.TeacherBackend"
            return teacher

        print("Password check failed.")
        return None