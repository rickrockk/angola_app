# Generated by Django 5.0.6 on 2024-06-06 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RealEstate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cadastral_number', models.CharField(max_length=100, verbose_name='Кадастровый номер')),
                ('type', models.CharField(max_length=100, verbose_name='Вид')),
                ('name', models.CharField(max_length=255, verbose_name='Наименование')),
                ('area', models.FloatField(verbose_name='Площадь')),
                ('floor', models.IntegerField(verbose_name='Этаж')),
                ('length', models.FloatField(verbose_name='Протяженность')),
                ('permitted_use', models.CharField(max_length=255, verbose_name='Разрешенное использование')),
                ('purpose', models.CharField(max_length=255, verbose_name='Назначение')),
                ('year_of_completion', models.IntegerField(verbose_name='Год ввода в эксплуатацию')),
                ('cadastral_value', models.FloatField(verbose_name='Кадастровая стоимость')),
                ('owner_info', models.CharField(max_length=255, verbose_name='Сведения о правообладателе')),
                ('registration_info', models.CharField(max_length=255, verbose_name='Государственная регистрация права и его ограничений')),
                ('court_claims_info', models.CharField(max_length=255, verbose_name='Сведения о заявленных в судебном порядке правах требования')),
                ('registration_impossibility_info', models.CharField(max_length=255, verbose_name='Сведения о невозможности государственной регистрации без личного участия правообладателя или его представителя')),
                ('land_registration_impossibility_info', models.CharField(max_length=255, verbose_name='Сведения о невозможности государственной регистрации перехода, прекращения, ограничения права на земельный участок из земель сельхозназначения')),
                ('plan_image', models.ImageField(upload_to='real_estate_plans/', verbose_name='План, чертеж или схема объекта недвижимости')),
            ],
            options={
                'verbose_name': 'Информация о недвижимости',
                'verbose_name_plural': 'Информация о недвижимости',
            },
        ),
    ]