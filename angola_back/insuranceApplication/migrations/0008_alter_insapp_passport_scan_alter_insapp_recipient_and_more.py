# Generated by Django 5.0.6 on 2024-06-06 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insuranceApplication', '0007_alter_insapp_passport_scan_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='insapp',
            name='passport_scan',
            field=models.ImageField(default=None, null=True, upload_to='passport_scans/', verbose_name='Скан паспорта'),
        ),
        migrations.AlterField(
            model_name='insapp',
            name='recipient',
            field=models.CharField(choices=[('себе', 'Себе'), ('ребенку', 'Ребенку')], default='себе', max_length=50, verbose_name='Кому'),
        ),
        migrations.AlterField(
            model_name='insapp',
            name='signature_scan',
            field=models.ImageField(default=None, null=True, upload_to='signature_scans/', verbose_name='Скан подписи'),
        ),
    ]
