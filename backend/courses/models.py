# courses/models.py

from django.db import models
from authentication.models import Teacher,CustomUser

class Course(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    mode = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    preview_video = models.URLField()
    image = models.URLField(null=True, blank=True)
    is_featured = models.BooleanField(default=False)
    is_trending = models.BooleanField(default=False)
    is_mostpopular = models.BooleanField(default=False)
    
class StudentCourses(models.Model):
    student = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    registered_course_ids = models.ManyToManyField('Course', related_name='registered_students_ids', blank=True)
    cart_course_ids = models.ManyToManyField('Course', related_name='cart_students_ids', blank=True)

class Module(models.Model):
    title = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE,related_name='modules_for_courses')

class Lecture(models.Model):
    title = models.CharField(max_length=255)
    youtube_url = models.URLField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE,related_name='lectures_for_courses')

class Assignment(models.Model):
    title = models.CharField(max_length=255)
    drive_link = models.URLField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE,related_name='assignments_for_courses')

class Note(models.Model):
    title = models.CharField(max_length=255)
    drive_link = models.URLField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE,related_name='notes_for_courses')

