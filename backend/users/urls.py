from django.urls import path
from .views import ProfileDetailView

urlpatterns = [
    path('profile/', ProfileDetailView.as_view(), name='profile-detail'),
    # Add more URLs for user-related views as needed
]
