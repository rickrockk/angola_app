from django.contrib import admin
from .models import RealEstate

@admin.register(RealEstate)
class RealEstateAdmin(admin.ModelAdmin):
    list_display = ['name', 'type', 'area', 'floor', 'year_of_completion']  # Отображаемые поля в списке объектов
    search_fields = ['name', 'type', 'owner_info']  # Поля для поиска
