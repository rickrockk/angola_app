from rest_framework import viewsets, permissions
from .models import RealEstate
from .serializers import RealEstateSerializer

class RealEstateViewSet(viewsets.ModelViewSet):
    serializer_class = RealEstateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return RealEstate.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
