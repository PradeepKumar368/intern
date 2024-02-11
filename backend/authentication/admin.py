from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser,Teacher

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'username', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password','last_login')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser'),
        }),
    )
    search_fields = ('email', 'username')
    ordering = ('email',)

class TeacherAdmin(admin.ModelAdmin):
    model = Teacher
    list_display = ('email', 'username', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password','last_login')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser'),
        }),
    )
    search_fields = ('email', 'username')
    ordering = ('email',)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Teacher,TeacherAdmin)

# from django.contrib.auth.hashers import identify_hasher
# class TeacherAdmin(UserAdmin):
#     list_display = ('email', 'username', 'is_active', 'is_staff')
#     search_fields = ('email', 'username')
#     ordering = ('email',)

#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal info', {'fields': ('username',)}),
#         ('Permissions', {'fields': ('is_active', 'is_staff', 'groups', 'user_permissions')}),
#         ('Important dates', {'fields': ('last_login',)}),  # Removed 'date_joined'
#         ('Password details', {
#             'fields': ('password_details',),
#             'classes': ('collapse',),
#         }),
#     )

#     readonly_fields = ('password_details',)

#     def password_details(self, obj):
#         # Check if the password is in the correct format
#         try:
#             identify_hasher(obj.password)
#         except ValueError:
#             return "Invalid password format or unknown hashing algorithm."

#         return f"algorithm: {obj.password.split('$')[0]} iterations: {obj.password.split('$')[2]} salt: {obj.password.split('$')[3][:16]} hash: {obj.password.split('$')[3][16:]}"

# admin.site.register(Teacher, TeacherAdmin)