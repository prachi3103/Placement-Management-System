# Generated by Django 2.2.4 on 2019-10-05 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_auto_20191006_0001'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='reply',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='comment',
            name='tname',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='comment',
            name='to',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
