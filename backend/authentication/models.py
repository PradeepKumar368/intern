from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.hashers import make_password

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, username, password, **extra_fields)

    # def set_password(self, user, raw_password):
    #     user.password = make_password(raw_password)
    #     user._password = raw_password  # Set raw_password as an attribute for later use if needed
    #     user.save(using=self._db)
    #     return user
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def save(self, *args, **kwargs):
        # Your custom save logic here, if needed
        super().save(*args, **kwargs)

    def check_password(self, raw_password):
        """
        Override the default check_password method to handle different password hashing.
        """
        if self.password.startswith('pbkdf2_sha256$'):
            # If the password is hashed using pbkdf2_sha256, use Django's default check_password
            return super().check_password(raw_password)
        else:
            # If the password is stored as plain text, compare it directly
            return self.password == raw_password
