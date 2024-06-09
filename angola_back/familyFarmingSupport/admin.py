from django.contrib import admin
from .models import FamFarm

@admin.register(FamFarm)
class FamFarmAdmin(admin.ModelAdmin):
    list_display = ['user','TIN']
