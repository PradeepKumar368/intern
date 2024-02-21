from django.urls import path
from .views import SignUpView, LoginView,TeacherSignupView,TeacherLoginView,TeacherProfileView,StudentProfileView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('teachersignup/',TeacherSignupView.as_view(),name='teacher-signup'),
    path('teacherlogin/',TeacherLoginView.as_view(),name='teacher-login'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('teacherprofile/', TeacherProfileView.as_view(), name='teacher-profile'),
    path('studentprofile/', StudentProfileView.as_view(), name='student-profile'),
]
