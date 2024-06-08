# pasapp/serializers.py
from rest_framework import serializers
from .models import PasApp
from passport.models import Passport
from passport.serializers import PassportSerializer

class PasAppSerializer(serializers.ModelSerializer):
    passport_data = PassportSerializer(read_only=True)

    class Meta:
        model = PasApp
        fields = '__all__'
        read_only_fields = ['user', 'passport_data']

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user
        passport = Passport.objects.get(user=user)
        validated_data['user'] = user
        validated_data['passport_data'] = passport
        return super().create(validated_data)
