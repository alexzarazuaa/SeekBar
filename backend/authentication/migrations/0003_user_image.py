# Generated by Django 3.1.7 on 2021-04-12 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20210412_0742'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
