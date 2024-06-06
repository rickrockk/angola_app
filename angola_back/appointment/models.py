# appointments/models.py
from django.db import models
from authentication.models import User
from med_insurance.models import MedInsurance
from hospital.models import Hospital
from doctor.models import Doctor

class AppReq(models.Model):
    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    med_insurance = models.ForeignKey(MedInsurance, on_delete=models.CASCADE, verbose_name='Медицинская страховка')
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, verbose_name='Больница')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, verbose_name='Врач')
    appointment_date = models.DateTimeField(verbose_name='Дата и время приема')
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')

    def __str__(self):
        return f'{self.user.first_name} - {self.appointment_date} - {self.status}'

    class Meta:
        verbose_name = 'Запрос на прием'
        verbose_name_plural = 'Запросы на прием'
