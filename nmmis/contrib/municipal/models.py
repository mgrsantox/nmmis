from django.contrib.gis.db import models
from django.utils.crypto import get_random_string
from nmmis.utils.mixins import TimeStamped, Population
from nmmis.contrib.district.models import District

class Municipal(Population, TimeStamped):
    """
    Class that describe the Municipal
    """
    id = models.CharField(
        primary_key=True, default=get_random_string(length=13),
        max_length=13, editable=False)
    district = models.ForeignKey(District, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)
    headquarter = models.CharField(max_length=50)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        verbose_name = "Municipal"
        verbose_name_plural = "Minicipals"

    def __str__(self):
        return self.name