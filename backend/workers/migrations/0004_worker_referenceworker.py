# Generated by Django 3.1.7 on 2021-04-12 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bars', '0002_auto_20210408_1228'),
        ('workers', '0003_work'),
    ]

    operations = [
        migrations.AddField(
            model_name='worker',
            name='referenceWorker',
            field=models.ManyToManyField(related_name='isAssign', through='workers.Work', to='bars.Bar'),
        ),
    ]