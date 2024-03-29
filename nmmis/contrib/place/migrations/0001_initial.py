# Generated by Django 3.0.8 on 2020-07-22 08:38

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion
import nmmis.utils.generators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('municipal', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('id', models.CharField(default=nmmis.utils.generators.aphnum_random2, editable=False, max_length=12, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=80)),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('ward', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='municipal.Ward')),
            ],
            options={
                'verbose_name': 'Place',
                'verbose_name_plural': 'Places',
                'db_table': 'place',
                'ordering': ['id'],
            },
        ),
    ]
