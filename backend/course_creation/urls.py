from django.urls import path
from .views import CourseAPIView, CourseDetailAPIView

urlpatterns = [
    path('courses/', CourseAPIView.as_view(), name='course-create'),
    path('courses/<int:pk>/', CourseDetailAPIView.as_view(), name='course-detail'),
]
