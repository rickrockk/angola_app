# vaccinations/models.py
from django.db import models
from authentication.models import User 

class VaсReq(models.Model):
    VACCINE_CHOICES = [
        ('covid', 'COVID-19'),
        ('flu', 'Грипп'),
        ('hep_b', 'Гепатит B'),
    ]

    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('одобрено', 'Одобрено'),
        ('отклонено', 'Отклонено'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    age = models.PositiveIntegerField(verbose_name='Возраст')
    vaccine_type = models.CharField(verbose_name='Тип вакцины', max_length=10, choices=VACCINE_CHOICES)
    request_date = models.DateTimeField(verbose_name='Дата заявки', auto_now_add=True)
    status = models.CharField(verbose_name='Статус', max_length=10, choices=STATUS_CHOICES, default='ожидание')

    @property
    def first_name(self):
        return self.user.first_name

    @property
    def contact_number(self):
        return self.user.phone_number

    @property
    def email(self):
        return self.user.email

    def __str__(self):
        return f'{self.first_name} - {self.vaccine_type}'

    class Meta:
        verbose_name = 'Заявка на прививку'
        verbose_name_plural = 'Заявки на прививки'
