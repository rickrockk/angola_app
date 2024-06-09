# Generated by Django 5.0.6 on 2024-06-08 19:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passport', '0002_passport_user'),
        ('passportApplication', '0008_remove_pasapp_reason_remove_pasapp_recipient_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pasapp',
            name='passport_data',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='passport_pasapp', to='passport.passport'),
        ),
    ]
