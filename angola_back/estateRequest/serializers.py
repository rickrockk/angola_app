from rest_framework import serializers
from .models import EstReq
from passport.serializers import PassportSerializer

class EstReqSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer(read_only=True)  # Инициализируем вложенный сериализатор

    class Meta:
        model = EstReq
        fields = ['id', 'user', 'passport_data', 'status']
        read_only_fields = ['user', 'passport_data']