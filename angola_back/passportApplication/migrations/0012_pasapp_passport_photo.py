# Generated by Django 5.0.6 on 2024-06-08 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passportApplication', '0011_alter_pasapp_application_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='pasapp',
            name='passport_photo',
            field=models.ImageField(default=None, null=True, upload_to='passport_photos/', verbose_name='Фото на паспорт'),
        ),
    ]