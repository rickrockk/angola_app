from rest_framework import viewsets, permissions
from .models import InsApp
from .serializers import InsAppSerializer

class InsAppViewSet(viewsets.ModelViewSet):
    serializer_class = InsAppSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return InsApp.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, passport_data=self.request.user.passport)
