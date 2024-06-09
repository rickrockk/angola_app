from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import FamFarm
from .serializers import FamFarmSerializer

class FamFarmViewSet(viewsets.ModelViewSet):
    queryset = FamFarm.objects.all()
    serializer_class = FamFarmSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, passport_data=self.request.user.passport)
