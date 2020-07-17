from django.contrib.gis.db import models
from nmmis.utils.generators import aphnum_random2
from nmmis.utils.mixins import TimeStamped, Population
from nmmis.contrib.province.models import Province

class District(Population, TimeStamped):
    """
    Class that describe the District
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random2,
        max_length=12, editable=False)
    province = models.ForeignKey(Province, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)
    headquarter = models.CharField(max_length=50)
    area = models.IntegerField()
    geom = models.PolygonField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "district"
        verbose_name = "District"
        verbose_name_plural = "Districts"

    def __str__(self):
        return self.name