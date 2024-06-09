# vaccinations/admin.py
from django.contrib import admin
from .models import VaсReq

@admin.register(VaсReq)
class VaReqtAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'vaccine_type', 'request_date', 'status', 'email', 'contact_number', 'visit_date')
    search_fields = ('first_name', 'vaccine_type', 'status', 'user__email', 'user__phone_number')
