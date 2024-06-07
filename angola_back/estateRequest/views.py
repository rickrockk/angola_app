from rest_framework.exceptions import ValidationError
from .models import EstReq
from .serializers import EstReqSerializer
from passport.models import Passport
from rest_framework import viewsets, permissions


class EstReqViewSet(viewsets.ModelViewSet):
    queryset = EstReq.objects.all()
    serializer_class = EstReqSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        try:
            passport_data = Passport.objects.get(user=user) 
        except Passport.DoesNotExist:
            raise ValidationError("У пользователя нет связанного паспорта.")
        serializer.save(user=user, passport_data=passport_data)
    
    def get_queryset(self):
        user = self.request.user
        return EstReq.objects.filter(user=user)
