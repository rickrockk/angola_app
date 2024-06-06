# applications/serializers.py
from rest_framework import serializers
from .models import InsApp
from passport.serializers import PassportSerializer

class InsAppSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer()  # Включаем сериализатор PassportSerializer для отображения информации о паспорте

    class Meta:
        model = InsApp
        fields = ['id', 'user', 'application_type', 'reason', 'passport_data']
        read_only_fields = ['user', 'passport_data']
