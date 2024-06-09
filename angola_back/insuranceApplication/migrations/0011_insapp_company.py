# Generated by Django 5.0.4 on 2024-06-08 16:09


from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insuranceApplication', '0010_alter_insapp_passport_scan'),
    ]

    operations = [
        migrations.AddField(
            model_name='insapp',
            name='company',
            field=models.CharField(choices=[('страховая 1', 'ООО "Nossa Seguros"'), ('страховая 2', 'ООО "Seguríssimos"'), ('страховая 3', 'ООО "Ensa"')], default='ООО "Nossa Seguros"', max_length=50, verbose_name='страховая'),
        ),
    ]
