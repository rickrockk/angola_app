from rest_framework import viewsets, permissions
from .models import VaсReq
from .serializers import VacReqSerializer

class VacReqViewSet(viewsets.ModelViewSet):
    serializer_class = VacReqSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return VaсReq.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
