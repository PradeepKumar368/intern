from django.db import models

# Define Course model to store course information
class Course(models.Model):
    title = models.CharField(max_length=100)
    youtubeUrl = models.URLField()

    def __str__(self):
        return self.title
    
    class Meta:
        app_label = 'course_creation'
