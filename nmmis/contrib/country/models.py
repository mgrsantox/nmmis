from django.contrib.gis.db import models
from nmmis.utils.generators import aphnum_random
from nmmis.utils.mixins import TimeStamped, Population


class Country(Population, TimeStamped):
    """
    Class that describe the Country
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random,
        max_length=10, editable=False)
    name = models.CharField(max_length=80)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "country"
        verbose_name = "Country"
        verbose_name_plural = "Countries"
    

    def __str__(self):
        return self.name
