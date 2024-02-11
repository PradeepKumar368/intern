from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Course
from .serializers import CourseSerializer

# API view to handle course creation
class CourseAPIView(generics.ListCreateAPIView):
    """
    API view to handle course creation.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    def post(self, request, format=None):
        """
        Handle POST request to create a new course.
        """
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, format=None):
        """
        Handle GET request to retrieve all courses.
        """
        courses = self.get_queryset()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# API view to handle course retrieval
class CourseDetailAPIView(generics.RetrieveAPIView):
    """
    API view to handle course retrieval.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
