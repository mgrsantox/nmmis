# Generated by Django 3.0.8 on 2020-07-13 09:39

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('total', models.PositiveIntegerField()),
                ('male', models.PositiveIntegerField()),
                ('female', models.PositiveIntegerField()),
                ('hindu', models.PositiveIntegerField()),
                ('buddhist', models.PositiveIntegerField()),
                ('muslim', models.PositiveIntegerField()),
                ('other', models.PositiveIntegerField()),
                ('id', models.CharField(default='6uMEI', editable=False, max_length=5, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=80)),
                ('area', models.IntegerField()),
                ('geom', django.contrib.gis.db.models.fields.PolygonField(srid=4326)),
            ],
            options={
                'verbose_name': 'Country',
                'verbose_name_plural': 'Countries',
            },
        ),
    ]
