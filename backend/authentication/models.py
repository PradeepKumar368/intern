from django.contrib.auth.models import AbstractBaseUser, UserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
# from django.contrib.auth.hashers import make_password

# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, username, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         print("create user is being called")
#         user = self.model(email=email, username=username, **extra_fields)
#         user.password = make_password(password)
#         user.save(using=self._db)
#         print(f"user successfully created with password : {user.password}")
#         return user

#     def create_superuser(self, email, username, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         return self.create_user(email, username, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    organization_name = models.CharField(max_length=255, blank=True, null=True)
    phone_no = models.CharField(max_length=20, blank=True, null=True)
    profile_picture_url = models.URLField(null=True, blank=True)
    # is_student = models.BooleanField('student status', default=False)
    # is_teacher = models.BooleanField('teacher status', default=False)
    # objects = CustomUserManager()

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def check_password(self, raw_password):
        print("user check password is being called")
        if self.password.startswith('pbkdf2_sha256$'):
            return super().check_password(raw_password)
        else:
            return self.password == raw_password
        
    groups = models.ManyToManyField(
        "auth.Group",
        verbose_name=_("groups"),
        blank=True,
        related_name="customuser_set",  # Use a unique related_name
        related_query_name="customuser",
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        verbose_name=_("user permissions"),
        blank=True,
        related_name="customuser_set",  # Use a unique related_name
        related_query_name="customuser",
    )

# class TeacherManager(BaseUserManager):
#     def create_teacher(self, email, username, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         print("create teacher is being called")
#         teacher = self.model(email=email, username=username, **extra_fields)
#         teacher.password = make_password(password)
#         teacher.save(using=self._db)
#         print(f"teacher successfully created with password : {teacher.password}")
#         return teacher

#     def create_superuser(self, email, username, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         return self.create_teacher(email, username, password, **extra_fields)

class Teacher(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    organization_name = models.CharField(max_length=255, blank=True, null=True)
    phone_no = models.CharField(max_length=20, blank=True, null=True)
    profile_picture_url = models.URLField(null=True, blank=True)
    # is_student = models.BooleanField('student status', default=False)
    # is_teacher = models.BooleanField('teacher status', default=False)
    # objects = TeacherManager()
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def check_password(self, raw_password):
        print("teacher check password is being called")
        if self.password.startswith('pbkdf2_sha256$'):
            return super().check_password(raw_password)
        else:
            return self.password == raw_password
        
    groups = models.ManyToManyField(
        "auth.Group",
        verbose_name=_("groups"),
        blank=True,
        related_name="teacher_set",
        related_query_name="teacher",
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        verbose_name=_("user permissions"),
        blank=True,
        related_name="teacher_set",
        related_query_name="teacher",
    )

