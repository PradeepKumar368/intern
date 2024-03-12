# courses/serializers.py

from rest_framework import serializers
from .models import Course, Module, Lecture, Assignment, Note, StudentCourses

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class StudentCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourses
        fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class CourseCurriculumSerializer(serializers.Serializer):
    course = serializers.SerializerMethodField()
    modules = ModuleSerializer(many=True)
    lectures = LectureSerializer(many=True)
    notes = NoteSerializer(many=True)
    assignments = AssignmentSerializer(many=True)

    def get_course(self, obj):
        # Customize this method to include the necessary course details
        course = obj.get('course')
        return {'id': course.id}