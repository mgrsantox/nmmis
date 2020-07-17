from django.contrib.gis.db import models
from nmmis.utils.generators import aphnum_random1
from nmmis.utils.mixins import TimeStamped, Population
from nmmis.contrib.country.models import Country

class Province(Population, TimeStamped):
    """
    Class that describe the Province
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random1,
        max_length=11, editable=False)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)
    headquarter = models.CharField(max_length=50)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "province"
        verbose_name = "Province"
        verbose_name_plural = "Provinces"

    def __str__(self):
        return self.name