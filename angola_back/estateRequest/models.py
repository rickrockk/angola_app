from django.db import models
from django.conf import settings
from passport.models import Passport

class EstReq(models.Model):

    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    passport_data = models.OneToOneField(Passport, on_delete=models.CASCADE, related_name='passport_estate', default=1)
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')

