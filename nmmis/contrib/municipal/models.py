from django.contrib.gis.db import models
from nmmis.utils.generators import aphnum_random3, aphnum_random
from nmmis.utils.mixins import TimeStamped, Population
from nmmis.contrib.district.models import District

class Municipal(Population, TimeStamped):
    """
    Class that describe the Municipal
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random3,
        max_length=13, editable=False)
    district = models.ForeignKey(District, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)
    headquarter = models.CharField(max_length=50)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "municipal"
        verbose_name = "Municipal"
        verbose_name_plural = "Minicipals"

    def __str__(self):
        return self.name


class Ward(Population, TimeStamped):
    """
    Class that describe the Ward
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random,
        max_length=12, editable=False)
    municipal = models.ForeignKey(Municipal, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)
    headquarter = models.CharField(max_length=50)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "ward"
        verbose_name = "Ward"
        verbose_name_plural = "Wards"

    def __str__(self):
        return self.name