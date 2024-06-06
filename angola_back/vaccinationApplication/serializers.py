# vaccinations/serializers.py
from rest_framework import serializers
from .models import VaсReq
from passport.serializers import PassportSerializer

class VacReqSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer()
    user_email = serializers.EmailField(source='user.email', read_only=True)
    user_phone_number = serializers.CharField(source='user.phone_number', read_only=True)

    class Meta:
        model = VaсReq
        fields = ['id', 'user', 'first_name', 'age', 'vaccine_type', 'request_date', 'status', 'user_email', 'user_phone_number']
