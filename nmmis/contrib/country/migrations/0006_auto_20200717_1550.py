# Generated by Django 3.0.8 on 2020-07-17 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('country', '0005_auto_20200717_1544'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.CharField(default='gkWjq', editable=False, max_length=5, primary_key=True, serialize=False),
        ),
    ]
