# Generated by Django 2.2.4 on 2019-10-19 17:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0005_auto_20191019_2318'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='questions',
            name='stu',
        ),
    ]
