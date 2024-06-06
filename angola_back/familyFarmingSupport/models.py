from django.db import models

class FamFarm(models.Model):
    # Информация о программе и проекте
    city = models.CharField(max_length=100, verbose_name='Город')
    program_name = models.CharField(max_length=255, verbose_name='Название программы')
    project_name = models.CharField(max_length=255, verbose_name='Название проекта')
    project_location = models.CharField(max_length=255, verbose_name='Локация проекта')
    project_description = models.TextField(verbose_name='Описание проекта')

    # Информация о заявителе
    applicant_full_name = models.CharField(max_length=255, verbose_name='ФИО заявителя')
    applicant_address = models.CharField(max_length=255, verbose_name='Адрес заявителя')
    applicant_zip_code = models.CharField(max_length=10, verbose_name='Индекс заявителя')
    applicant_city = models.CharField(max_length=100, verbose_name='Город заявителя')
    applicant_phone = models.CharField(max_length=20, verbose_name='Телефон заявителя')
    applicant_email = models.EmailField(verbose_name='Email заявителя')
    applicant_website = models.URLField(verbose_name='Сайт заявителя', blank=True, null=True)

    # Информация о типе организации
    ORGANIZATION_TYPE_CHOICES = [
        ('ИП', 'Индивидуальный предприниматель'),
        ('ООО', 'Общество с ограниченной ответственностью'),
        ('Фермерское хозяйство', 'Фермерское хозяйство'),
        ('Другое', 'Другое'),
    ]
    STATUS_CHOICES = [
        ('ожидание', 'Ожидание'),
        ('подтверждено', 'Подтверждено'),
        ('отменено', 'Отменено'),
    ]
    organization_type = models.CharField(max_length=50, choices=ORGANIZATION_TYPE_CHOICES, verbose_name='Тип организации')

    # Информация о партнёре (если есть)
    partner_name = models.CharField(max_length=255, verbose_name='Название партнёра', blank=True, null=True)
    partner_address = models.CharField(max_length=255, verbose_name='Адрес партнёра', blank=True, null=True)
    partner_zip_code = models.CharField(max_length=10, verbose_name='Индекс партнёра', blank=True, null=True)
    partner_city = models.CharField(max_length=100, verbose_name='Город партнёра', blank=True, null=True)
    partner_phone = models.CharField(max_length=20, verbose_name='Телефон партнёра', blank=True, null=True)
    partner_email = models.EmailField(verbose_name='Email партнёра', blank=True, null=True)
    partner_website = models.URLField(verbose_name='Сайт партнёра', blank=True, null=True)
    status = models.CharField(verbose_name='Статус', max_length=15, choices=STATUS_CHOICES, default='ожидание')


    class Meta:
        verbose_name = 'Поддержка семейного фермерства'
        verbose_name_plural = 'Поддержка семейного фермерства'

    def __str__(self):
        return f"{self.program_name} - {self.project_name}"
