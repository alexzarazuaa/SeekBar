# Generated by Django 3.1.7 on 2021-05-05 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bars', '0003_auto_20210505_1557'),
        ('clients', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='favorites',
            field=models.ManyToManyField(related_name='favorited_by', to='bars.Bar'),
        ),
    ]
