# Generated by Django 3.0.8 on 2020-07-17 12:19

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion
import nmmis.utils.generators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('district', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Municipal',
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
                ('id', models.CharField(default=nmmis.utils.generators.aphnum_random3, editable=False, max_length=13, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=80)),
                ('headquarter', models.CharField(max_length=50)),
                ('area', models.IntegerField()),
                ('geom', django.contrib.gis.db.models.fields.PolygonField(srid=4326)),
                ('district', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='district.District')),
            ],
            options={
                'verbose_name': 'Municipal',
                'verbose_name_plural': 'Minicipals',
                'db_table': 'municipal',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Ward',
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
                ('id', models.CharField(default=nmmis.utils.generators.aphnum_random, editable=False, max_length=12, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=80)),
                ('headquarter', models.CharField(max_length=50)),
                ('area', models.IntegerField()),
                ('geom', django.contrib.gis.db.models.fields.PolygonField(srid=4326)),
                ('municipal', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='municipal.Municipal')),
            ],
            options={
                'verbose_name': 'Ward',
                'verbose_name_plural': 'Wards',
                'db_table': 'ward',
                'ordering': ['id'],
            },
        ),
    ]