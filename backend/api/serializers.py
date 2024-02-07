from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from authentication.models import CustomUser,Teacher  # Make sure the import path is correct

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        user = User.objects.create_user(**validated_data)
        return user


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')  # Add other fields if needed
        extra_kwargs = {'password': {'write_only': True}}


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Hash the password before saving the teacher
        validated_data['password'] = make_password(validated_data.get('password'))
        teacher = Teacher.objects.create_teacher(**validated_data)
        return teacher

class TeacherSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('email', 'username', 'password')  # Add other fields if needed
        extra_kwargs = {'password': {'write_only': True}}
