from rest_framework import serializers
from .models import PasApp  
from passport.serializers import PassportSerializer

class PasAppSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer()  

    class Meta:
        model = PasApp  
        fields = ['id', 'user', 'application_type', 'reason', 'passport_data']
        read_only_fields = ['user', 'passport_data']
