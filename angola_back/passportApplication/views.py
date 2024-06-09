# pasapp/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import PasApp
from .serializers import PasAppSerializer
from passport.models import Passport
from .models import PasApp

class PasAppViewSet(viewsets.ModelViewSet):
    queryset = PasApp.objects.all()
    serializer_class = PasAppSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
