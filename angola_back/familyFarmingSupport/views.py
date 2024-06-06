from rest_framework import viewsets, permissions
from .models import FamFarm
from .serializers import FamFarmSerializer

class FamFarmViewSet(viewsets.ModelViewSet):
    serializer_class = FamFarmSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return FamFarm.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
