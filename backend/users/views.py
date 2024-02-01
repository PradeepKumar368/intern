from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer

class ProfileDetailView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
