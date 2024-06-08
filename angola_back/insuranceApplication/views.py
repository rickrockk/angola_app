# applications/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import InsApp
from .serializers import InsAppSerializer

class InsAppViewSet(viewsets.ModelViewSet):
    queryset = InsApp.objects.all()
    serializer_class = InsAppSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
