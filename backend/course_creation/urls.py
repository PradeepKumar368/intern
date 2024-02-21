from django.urls import path
from .views import CourseAPIView, CourseDetailAPIView

urlpatterns = [
    path('coursesvideo/', CourseAPIView.as_view(), name='course-create'),
    path('coursesvideo/<int:pk>/', CourseDetailAPIView.as_view(), name='course-detail'),
]
