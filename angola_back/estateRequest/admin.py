from django.contrib import admin
from .models import EstReq

@admin.register(EstReq)
class EstReqAdmin(admin.ModelAdmin):
    list_display = ('user', 'passport_data', 'status')
    list_filter = ('status',)
    search_fields = ('user__username', 'passport_data__passport_number')