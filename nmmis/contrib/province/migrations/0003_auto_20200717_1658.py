# Generated by Django 3.0.8 on 2020-07-17 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('province', '0002_auto_20200717_1645'),
    ]

    operations = [
        migrations.AlterField(
            model_name='province',
            name='id',
            field=models.CharField(default='MNzThyUzcJk', editable=False, max_length=11, primary_key=True, serialize=False),
        ),
    ]
