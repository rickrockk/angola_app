# Generated by Django 5.0.6 on 2024-06-08 20:04


from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insuranceApplication', '0011_insapp_company'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='insapp',
            name='reason',
        ),
        migrations.AlterField(
            model_name='insapp',
            name='application_type',
            field=models.CharField(choices=[('получение', 'Получение'), ('замена', 'Замена')], default='Получение', max_length=50),
        ),
    ]
