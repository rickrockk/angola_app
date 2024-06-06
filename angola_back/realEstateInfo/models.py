from django.db import models
from passport.models import Passport

class RealEstate(models.Model):
    # Описание объекта недвижимости
    cadastral_number = models.CharField(max_length=100, verbose_name='Кадастровый номер')
    type = models.CharField(max_length=100, verbose_name='Вид')
    name = models.CharField(max_length=255, verbose_name='Наименование')
    area = models.FloatField(verbose_name='Площадь')
    floor = models.IntegerField(verbose_name='Этаж')
    length = models.FloatField(verbose_name='Протяженность')
    permitted_use = models.CharField(max_length=255, verbose_name='Разрешенное использование')
    purpose = models.CharField(max_length=255, verbose_name='Назначение')
    year_of_completion = models.DateField('Год ввода в эксплуатацию')

    cadastral_value = models.FloatField(verbose_name='Кадастровая стоимость')

    owner_info = models.CharField(max_length=255, verbose_name='Сведения о правообладателе')

    registration_info = models.CharField(max_length=255, verbose_name='Государственная регистрация права и его ограничений')

    court_claims_info = models.CharField(max_length=255, verbose_name='Сведения о заявленных в судебном порядке правах требования')

    registration_impossibility_info = models.CharField(max_length=255, verbose_name='Сведения о невозможности государственной регистрации без личного участия правообладателя или его представителя')

    land_registration_impossibility_info = models.CharField(max_length=255, verbose_name='Сведения о невозможности государственной регистрации перехода, прекращения, ограничения права на земельный участок из земель сельхозназначения')

    plan_image = models.ImageField(upload_to='real_estate_plans/', verbose_name='План, чертеж или схема объекта недвижимости')
    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')
    passport_data = models.OneToOneField(Passport, on_delete=models.CASCADE, related_name='realEstateInfo', default=1)

    class Meta:
        verbose_name = 'Информация о недвижимости'
        verbose_name_plural = 'Информация о недвижимости'

    def __str__(self):
        return f"{self.name} ({self.type})"
