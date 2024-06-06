from rest_framework import viewsets, permissions
from .models import PasApp
from .serializers import PasAppSerializer

class PasAppViewSet(viewsets.ModelViewSet):
    serializer_class = PasAppSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return PasApp.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, passport_data=self.request.user.passport)
