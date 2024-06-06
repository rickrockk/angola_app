from django.contrib import admin
from .models import FamFarm

@admin.register(FamFarm)
class FamFarmAdmin(admin.ModelAdmin):
    list_display = ['program_name', 'project_name', 'applicant_full_name', 'applicant_city', 'organization_type']
    search_fields = ['program_name', 'project_name', 'applicant_full_name']
