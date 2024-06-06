# appointments/admin.py
from django.contrib import admin
from .models import AppReq

@admin.register(AppReq)
class AAppReqAdmin(admin.ModelAdmin):
    list_display = ('user', 'med_insurance', 'hospital', 'doctor', 'appointment_date', 'status')
    list_filter = ('status', 'appointment_date')
    search_fields = ('user__username', 'doctor__name', 'hospital__name')
    ordering = ('-appointment_date',)
