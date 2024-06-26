# Generated by Django 5.0.6 on 2024-05-28 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctor', '0003_remove_doctor_hospital'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='doctor',
            options={},
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='specialization',
        ),
        migrations.AddField(
            model_name='doctor',
            name='full_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='profession',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
