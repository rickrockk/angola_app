# vaccinations/serializers.py
from rest_framework import serializers
from .models import VaсReq
from med_insurance.serializers import MedInsuranceSerializer
from med_insurance.models import MedInsurance

class VacReqSerializer(serializers.ModelSerializer):
    insurance_data = MedInsuranceSerializer(read_only=True)
    user_email = serializers.EmailField(source='user.email', read_only=True)
    user_phone_number = serializers.CharField(source='user.phone_number', read_only=True)

    class Meta:
        model = VaсReq
        fields = '__all__'
    
    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user
        insurance = MedInsurance.objects.get(user=user)
        validated_data['user'] = user
        validated_data['insurance_data'] = insurance
        return super().create(validated_data)
