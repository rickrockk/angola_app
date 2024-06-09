from rest_framework import serializers
from .models import FamFarm

class FamFarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = FamFarm
        fields = ['user', 'TIN', 'date_of_registration', 'tax_authority', 'registration_address', 'charter_scan', 'experience_scan', 'statement_scan', 'base_scan', 'status']
        read_only_fields = ['user', 'passport_data']

    def create(self, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            user = request.user
            validated_data['user'] = user
            validated_data['passport_data'] = user.passport
        return super().create(validated_data)
