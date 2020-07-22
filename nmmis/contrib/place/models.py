from django.contrib.gis.db import models
from nmmis.utils.generators import aphnum_random2
from nmmis.utils.mixins import TimeStamped
from nmmis.contrib.municipal.models import Ward



class Place(TimeStamped):
    """
    Class that describe the District
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random2,
        max_length=12, editable=False)
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    geom = models.PointField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "place"
        verbose_name = "Place"
        verbose_name_plural = "Places"

    def __str__(self):
        return self.name