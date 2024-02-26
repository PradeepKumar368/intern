# courses/views.py
from django.shortcuts import get_object_or_404
from rest_framework import viewsets,status
from .models import Course, Module, Lecture, Assignment, Note
from .serializers import CourseSerializer, ModuleSerializer, LectureSerializer, AssignmentSerializer, NoteSerializer,CourseCurriculumSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes,authentication_classes
from authentication.models import Teacher

class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        print("Executing get_queryset method.")

        if self.request.user.is_authenticated and isinstance(self.request.user, Teacher):
            print("inside teacher")
            teacher_id = self.request.user.id
            courses = Course.objects.filter(teacher_id=teacher_id)
            print(courses)
            return courses
        else:
            print(f"Debug: not a teacher: {self.request.user}")
            return Course.objects.none()

    def perform_create(self, serializer):
        # Associate the authenticated teacher with the course upon creation
        serializer.save(teacher=self.request.user)

    def create(self, request, *args, **kwargs):
        # Get the auth_token from the request's cookies
        auth_token = request.COOKIES.get('auth_token')
        
        # If auth_token is available, include it in the Authorization header
        if auth_token:
            self.headers['Authorization'] = f'Bearer {auth_token}'
        
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Get the auth_token from the request's cookies
        auth_token = request.COOKIES.get('auth_token')
        
        # If auth_token is available, include it in the Authorization header
        if auth_token:
            self.headers['Authorization'] = f'Bearer {auth_token}'
        
        return super().update(request, *args, **kwargs)


class CourseDetailViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    # Override the retrieve method to allow anyone to access course info
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class CourseCurriculumViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CourseCurriculumSerializer

    def get_queryset(self):
        # Retrieve the course ID from the URL parameters
        course_id = self.kwargs.get('pk')
        print(course_id)
        # Get the course object
        course = get_object_or_404(Course, id=course_id)
        print(course)
        # Get related modules, lectures, notes, and assignments for the course
        modules = Module.objects.filter(course=course.id)
        print(modules)
        lectures = Lecture.objects.filter(module__in=modules)
        print(lectures)
        notes = Note.objects.filter(module__in=modules)
        print(notes)
        assignments = Assignment.objects.filter(module__in=modules)
        print(assignments)

        # You can customize this queryset based on your specific needs
        return {
            'course': course,
            'modules': modules,
            'lectures': lectures,
            'notes': notes,
            'assignments': assignments,
        }

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_queryset()

        # Construct the desired response format
        response_data = {
            'course': {
                'id': instance['course'].id,
                'title': instance['course'].title,
                'description': instance['course'].description,
                'price': instance['course'].price,
                'mode': instance['course'].mode,
                'category': instance['course'].category,
                'preview_video': instance['course'].preview_video,
            },
            'modules': ModuleSerializer(instance['modules'], many=True).data,
            'lectures': LectureSerializer(instance['lectures'], many=True).data,
            'notes': NoteSerializer(instance['notes'], many=True).data,
            'assignments': AssignmentSerializer(instance['assignments'], many=True).data,
        }

        return Response(response_data)

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

    def get_queryset(self):
        course_id = self.request.query_params.get('course')
        
        if course_id:
            return Module.objects.filter(course_id=course_id)
        else:
            return Module.objects.all()
        
    def create(self, request, *args, **kwargs):
        course_id = request.data.get('course') or request.query_params.get('course')
        if not course_id:
            return Response({'error': 'Course ID is required for module creation.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(course_id=course_id)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LectureViewSet(viewsets.ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer

    def get_queryset(self):
        module_id = self.request.query_params.get('module')
        
        if module_id:
            return Lecture.objects.filter(module_id=module_id)
        else:
            return Lecture.objects.all()
        
    def create(self, request, *args, **kwargs):
        module_id = request.data.get('module') or request.query_params.get('module')
        if not module_id:
            return Response({'error': 'module_id is required for lecture creation.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(module_id=module_id)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

    def get_queryset(self):
        module_id = self.request.query_params.get('module')
        
        if module_id:
            return Assignment.objects.filter(module_id=module_id)
        else:
            return Assignment.objects.all()
        
    def create(self, request, *args, **kwargs):
        module_id = request.data.get('module') or request.query_params.get('module')
        if not module_id:
            return Response({'error': 'module_id is required for assignment creation.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(module_id=module_id)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        module_id = self.request.query_params.get('module')
        
        if module_id:
            return Note.objects.filter(module_id=module_id)
        else:
            return Note.objects.all()
        
    def create(self, request, *args, **kwargs):
        module_id = request.data.get('module') or request.query_params.get('module')
        if not module_id:
            return Response({'error': 'module_id is required for notes creation.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(module_id=module_id)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

"""course_creation_course            

courses_assignment                

courses_course                    

courses_lecture                   

courses_module                    

courses_note     """
                 
# teacher = Teacher.objects.filter(id = course.teacher_id)

"""coursecontentviewset{
teacher = Teacher.objects.filter(id = course.teacher_id)
module = course.objects.filter(id = course.id)
}"""

"""
http PATCH http://127.0.0.1:8000/api/courses/4/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzM5Nzc3LCJpYXQiOjE3MDgzMzYxNzcsImp0aSI6IjMyYzQwYTFkYTNhZDQ1YTdiNGYxZGZhZjAzYzZlYjhlIiwidXNlcl9pZCI6MzV9.W2GK06D5c84bxbtv_1X86qu94KRDaAlYwdl6TCss9jU" "Content-Type: application/json" title="Updated Course Title second time" 
http GET http://127.0.0.1:8000/api/courses/ "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzM5Nzc3LCJpYXQiOjE3MDgzMzYxNzcsImp0aSI6IjMyYzQwYTFkYTNhZDQ1YTdiNGYxZGZhZjAzYzZlYjhlIiwidXNlcl9pZCI6MzV9.W2GK06D5c84bxbtv_1X86qu94KRDaAlYwdl6TCss9jU"
http GET http://127.0.0.1:8000/api/courses/3/ "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzM5Nzc3LCJpYXQiOjE3MDgzMzYxNzcsImp0aSI6IjMyYzQwYTFkYTNhZDQ1YTdiNGYxZGZhZjAzYzZlYjhlIiwidXNlcl9pZCI6MzV9.W2GK06D5c84bxbtv_1X86qu94KRDaAlYwdl6TCss9jU"
http POST http://127.0.0.1:8000/api/teacherlogin/ identifier="teacher4@example.com" password="your_password"
http PATCH http://127.0.0.1:8000/api/lectures/1/ "Content-Type: application/json" title="Updated lecture Title 2"  
"""

