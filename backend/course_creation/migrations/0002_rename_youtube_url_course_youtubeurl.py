# Generated by Django 5.0.1 on 2024-02-08 10:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course_creation', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='youtube_url',
            new_name='youtubeUrl',
        ),
    ]
