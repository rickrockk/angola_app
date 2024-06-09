# applications/models.py
from django.db import models
from django.conf import settings
from passport.models import Passport

class InsApp(models.Model):

    APPLICATION_TYPE_CHOICES = [
        ('получение', 'Получение'),
        ('замена', 'Замена'),
    ]
    RECIPIENT_CHOICES = [
        ('себе', 'Себе'),
        ('ребенку', 'Ребенку'),
    ]
    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]
    COMPANY_CHOICES = [
        ('страховая 1','ООО "Nossa Seguros"'),
        ('страховая 2','ООО "Seguríssimos"'),
        ('страховая 3','ООО "Ensa"'),
    ]


    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    application_type = models.CharField(max_length=50, choices=APPLICATION_TYPE_CHOICES,default='Получение')
    passport_data = models.OneToOneField(Passport, on_delete=models.CASCADE, related_name='insurance_app', default=1)
    passport_scan = models.ImageField(upload_to='passport_scans/', verbose_name='Скан паспорта', default=None, blank=False, null=True)
    signature_scan = models.ImageField(upload_to='signature_scans/', verbose_name='Скан подписи',default=None, blank=False, null=True)
    recipient = models.CharField(max_length=50, choices=RECIPIENT_CHOICES, verbose_name='Кому', default='себе')
    company = models.CharField(max_length=50, choices= COMPANY_CHOICES, verbose_name='страховая', default='ООО "Nossa Seguros"')
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')

    def __str__(self):
        return f"Заявка {self.user.email} на {self.application_type}"  

    def get_passport_info(self):
        return f"Паспорт: {self.passport_data.series_number} {self.passport_data.last_name} {self.passport_data.first_name}"  
