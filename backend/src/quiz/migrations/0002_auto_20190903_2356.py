# Generated by Django 2.2.4 on 2019-09-03 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='questionid',
            field=models.AutoField(max_length=200, primary_key=True, serialize=False),
        ),
    ]
