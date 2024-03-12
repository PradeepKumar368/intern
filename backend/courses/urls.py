# courses/urls.py

from rest_framework.routers import DefaultRouter
from .views import AssignmentViewSet, CourseViewSet, LectureViewSet, ModuleViewSet, NoteViewSet,CourseDetailViewSet,CourseCurriculumViewSet,StudentCoursesViewSet

router = DefaultRouter()
router.register(r'assignments', AssignmentViewSet, basename='assignments')
router.register(r'courses', CourseViewSet, basename='courses')
router.register(r'lectures', LectureViewSet, basename='lectures')
router.register(r'modules', ModuleViewSet, basename='modules')
router.register(r'notes', NoteViewSet, basename='notes')
router.register(r'coursedetail', CourseDetailViewSet, basename='coursesdetail')
router.register(r'coursecurriculum', CourseCurriculumViewSet, basename='course-curriculum')
router.register(r'student_courses', StudentCoursesViewSet, basename='student-courses')
urlpatterns = router.urls
