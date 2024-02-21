from rest_framework import serializers
# from django.contrib.auth.models import User
# from django.contrib.auth.hashers import make_password
from authentication.models import CustomUser,Teacher

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         print('api/serializers/UserSerializer is being called')
#         fields = ['id', 'username', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         validated_data['password'] = make_password(validated_data.get('password'))
#         print('api/serializers/UserSerializer/create is being called')
#         user = User.objects.create_user(**validated_data)
#         return user


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password','organization_name','phone_no')  # Add other fields if needed
        extra_kwargs = {'password': {'write_only': True}}


# class TeacherSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Teacher
#         print('api/serializers/TeacherSerializer is being called')
#         fields = ['email', 'username', 'password']
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         # Hash the password before saving the teacher
#         print('api/serializers/TeacherSerializer/create is being called')
#         validated_data['password'] = make_password(validated_data.get('password'))
#         teacher = Teacher.objects.create_teacher(**validated_data)
#         return teacher

class TeacherSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('id','email', 'username', 'password','organization_name','phone_no')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        teacher = Teacher.objects.create_user(email=validated_data['email'], username=validated_data['username'], password=password)
        return teacher

class TeacherProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'username', 'email', 'organization_name', 'phone_no']

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'organization_name', 'phone_no']