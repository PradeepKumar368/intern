from django.urls import path
from .views import SignUpView, LoginView,TeacherSignupView,TeacherLoginView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('teachersignup/',TeacherSignupView.as_view(),name='teacher-signup'),
    path('teacherlogin/',TeacherLoginView.as_view(),name='teacher-login'),
]
