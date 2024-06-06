from rest_framework import serializers
from .models import FamFarm
from passport.serializers import PassportSerializer

class FamFarmSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer()
    class Meta:
        model = FamFarm
        fields = '__all__'
