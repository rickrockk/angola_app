# applications/serializers.py
from rest_framework import serializers
from .models import InsApp
from passport.serializers import PassportSerializer
from passport.models import Passport

class InsAppSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer(read_only=True)  # Включаем сериализатор PassportSerializer для отображения информации о паспорте

    class Meta:
        model = InsApp
        fields = '__all__'
        read_only_fields = ['user', 'passport_data']

    def create(self, validated_data):
            request = self.context.get('request')
            user = request.user
            passport = Passport.objects.get(user=user)
            validated_data['user'] = user
            validated_data['passport_data'] = passport
            return super().create(validated_data)
