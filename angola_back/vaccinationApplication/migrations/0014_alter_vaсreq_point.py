# Generated by Django 5.0.6 on 2024-06-09 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vaccinationApplication', '0013_alter_vaсreq_point'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vaсreq',
            name='point',
            field=models.CharField(default='Москва', max_length=100, verbose_name='Пункт вакцинации'),
        ),
    ]
