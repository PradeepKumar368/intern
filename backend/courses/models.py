# courses/models.py

from django.db import models
from authentication.models import Teacher


class Course(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    mode = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    preview_video = models.URLField()
    

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

