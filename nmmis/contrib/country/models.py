from django.contrib.gis.db import models
from django.utils.crypto import get_random_string
from nmmis.utils.mixins import TimeStamped, Population


class Country(Population, TimeStamped):
    """
    Class that describe the Country
    """
    id = models.CharField(
        primary_key=True, default=get_random_string(length=5),
        max_length=5, editable=False)
    name = models.CharField(max_length=80)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"

    def __str__(self):
        return self.name
