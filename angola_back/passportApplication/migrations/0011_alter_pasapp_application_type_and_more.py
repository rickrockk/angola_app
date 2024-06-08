# Generated by Django 5.0.6 on 2024-06-08 20:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passport', '0002_passport_user'),
        ('passportApplication', '0010_alter_pasapp_passport_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pasapp',
            name='application_type',
            field=models.CharField(choices=[('получение', 'Получение паспорта'), ('замена', 'Замена паспорта')], default='Получение паспорта', max_length=50),
        ),
        migrations.AlterField(
            model_name='pasapp',
            name='passport_data',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='passport_app', to='passport.passport'),
        ),
    ]
