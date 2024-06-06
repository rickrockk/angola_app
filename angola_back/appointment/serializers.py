# appointments/serializers.py
from rest_framework import serializers
from .models import AppReq

class AppReqSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppReq
        fields = '__all__'
