# pasapp/models.py
from django.db import models
from django.conf import settings
from passport.models import Passport

class PasApp(models.Model): 
    APPLICATION_TYPE_CHOICES = [
        ('получение', 'Получение паспорта'),
        ('замена', 'Замена паспорта'),
    ]

    CAUSE_CHOICES = [
            ('возраст','Достижение 20 или 45 лет'),
            ('фио','Изменение фамилии,имени или отчества'),
            ('обстоятельства','Потеря или непригодность к использованию'),
            ('ошибка','Ошибка в паспорте'),
            ('внешность','Изменение внешности'),
        ]


    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    application_type = models.CharField(max_length=50, choices=APPLICATION_TYPE_CHOICES, default='Получение паспорта')
    passport_data = models.OneToOneField(Passport, on_delete=models.CASCADE, related_name='passport_app', default=1)
    cause = models.CharField(verbose_name='причина', max_length=50, choices=CAUSE_CHOICES, default='Достижение 20 или 45 лет')
    passport_photo = models.ImageField(upload_to='passport_photos/', verbose_name='Фото на паспорт',default=None, blank=False, null=True)
    passport_scan = models.ImageField(upload_to='passport_scans/', verbose_name='Скан паспорта',default=None, blank=False, null=True)
    signature_scan = models.ImageField(upload_to='signature_scans/', verbose_name='Скан подписи', default=None, blank=False, null=True)
    marriage_scan = models.ImageField(upload_to='marriage_scans/', verbose_name='Скан брака', default=None, blank=False, null=True)
    birth_scan = models.ImageField(upload_to='birth_scans/', verbose_name='Скан свидетельства', default=None, blank=False, null=True)
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')

    def __str__(self):
        return f"Заявка {self.user.email} на {self.application_type}"

    def get_passport_info(self):
        return f"Паспорт: {self.passport_data.series_number} {self.passport_data.last_name} {self.passport_data.first_name}"

    class Meta:
        verbose_name = 'Заявка на паспорт'
        verbose_name_plural = 'Заявки на паспорт'
