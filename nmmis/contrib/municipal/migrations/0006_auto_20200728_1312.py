# Generated by Django 3.0.8 on 2020-07-28 07:27

import django.contrib.gis.db.models.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('municipal', '0005_telecom_transformer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='telecom',
            name='geom',
            field=django.contrib.gis.db.models.fields.PointField(srid=3857),
        ),
    ]
