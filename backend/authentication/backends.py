from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailBackend(ModelBackend):
    def authenticate(self, request, email=None, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        print("Testing if the authenticate method is being called.")
        print(f"Email: {email}, Username: {username}, Password: {password}")

        # Attempt to authenticate with email
        if email:
            try:
                user = UserModel.objects.get(email=email)
                print(f"User found by email: {user}")
            except UserModel.DoesNotExist:
                print("User not found by email.")
                return None
        # Attempt to authenticate with username
        elif username:
            try:
                user = UserModel.objects.get(username=username)
                print(f"User found by username: {user}")
            except UserModel.DoesNotExist:
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
