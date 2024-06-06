from django.contrib import admin
from .models import InsApp

@admin.register(InsApp)
class InsAppAdmin(admin.ModelAdmin):
    list_display = ('user', 'application_type', 'reason', 'passport_data')
    search_fields = ('user__email', 'application_type')
    list_filter = ('application_type',)
