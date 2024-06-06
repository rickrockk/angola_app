# applications/admin.py
from django.contrib import admin
from .models import PasApp

@admin.register(PasApp)
class PassportApplicationAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'application_type', 'reason', 'passport_data'] 
    list_filter = ['application_type'] 
    search_fields = ['user__email', 'reason'] 
