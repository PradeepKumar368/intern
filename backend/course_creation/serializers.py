from rest_framework import serializers
from .models import Course

# Serializer to convert Course model data into JSON format
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'youtubeUrl']
