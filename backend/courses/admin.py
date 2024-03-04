from django.contrib import admin
from .models import Course

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'teacher', 'title', 'mode', 'category', 'price', 'description', 'preview_video','image', 'is_featured', 'is_trending', 'is_mostpopular')
    list_filter = ('id', 'teacher', 'title', 'mode', 'category', 'price', 'description', 'preview_video', 'image', 'is_featured', 'is_trending', 'is_mostpopular')
    search_fields = ('id', 'teacher', 'title', 'mode', 'category', 'price', 'description', 'preview_video', 'image', 'is_featured', 'is_trending', 'is_mostpopular')  # Add any other fields you want to search on

    actions = ['make_featured', 'make_trending', 'make_mostpopular']

    def make_featured(self, request, queryset):
        queryset.update(is_featured=True)

    def make_trending(self, request, queryset):
        queryset.update(is_trending=True)

    def make_mostpopular(self, request, queryset):
        queryset.update(is_mostpopular=True)

admin.site.register(Course, CourseAdmin)
