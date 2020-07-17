from django.contrib.gis.db import models
from django.utils.crypto import get_random_string
from nmmis.utils.mixins import TimeStamped, Population
from nmmis.contrib.province.models import Province

class District(Population, TimeStamped):
    """
    Class that describe the District
    """
    id = models.CharField(
        primary_key=True, default=get_random_string(length=12),
        max_length=12, editable=False)
    province = models.ForeignKey(Province, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)
    headquarter = models.CharField(max_length=50)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        verbose_name = "District"
        verbose_name_plural = "Districts"

    def __str__(self):
        return self.name