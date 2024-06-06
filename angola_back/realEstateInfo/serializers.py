from rest_framework import serializers
from .models import RealEstate
from passport.serializers import PassportSerializer

class RealEstateSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer()

    class Meta:
        model = RealEstate
        fields = '__all__'
