from django.db import models
from django.conf import settings
from passport.models import Passport

class FamFarm(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    passport_data = models.OneToOneField(Passport, on_delete=models.CASCADE, related_name='passport_farming')
    TIN = models.CharField(verbose_name='ИНН', max_length=12, null=True, blank=True)
    date_of_registration = models.DateField(verbose_name='Дата постановки на учет', null=True, blank=True)
    tax_authority = models.CharField(verbose_name='Налоговый орган', max_length=100, null=True, blank=True)
    registration_address = models.CharField(verbose_name='Адрес регистрации', max_length=100, null=True, blank=True)
    charter_scan = models.ImageField(upload_to='charter_scans/', verbose_name='Устав КФХ', null=True, blank=False)
    experience_scan = models.ImageField(upload_to='experience_scans/', verbose_name='Опыт руководителя', null=True, blank=False)
    statement_scan = models.ImageField(upload_to='statement_scans/', verbose_name='Финансовая отчетность', null=True, blank=False)
    base_scan = models.ImageField(upload_to='base_scans/', verbose_name='Материально-техническая база', null=True, blank=False)

    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')

    class Meta:
        verbose_name = 'Поддержка семейного фермерства'
        verbose_name_plural = 'Поддержка семейного фермерства'

    def save(self, *args, **kwargs):
        if not self.pk:  # If this is a new instance
            self.passport_data = Passport.objects.get(user=self.user)
        super(FamFarm, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.user. first_name} - {self.TIN}"
