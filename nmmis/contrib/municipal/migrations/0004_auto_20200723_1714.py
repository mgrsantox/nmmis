# Generated by Django 3.0.8 on 2020-07-23 11:29

import django.contrib.gis.db.models.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('municipal', '0003_auto_20200723_1712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='road',
            name='geom',
            field=django.contrib.gis.db.models.fields.LineStringField(srid=4326),
        ),
    ]
