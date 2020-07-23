from django.contrib.gis.db import models
from nmmis.utils.generators import aphnum_random2
from nmmis.utils.mixins import TimeStamped
from nmmis.contrib.municipal.models import Ward
from django.core.validators import FileExtensionValidator



class Building(TimeStamped):
    """
    Class that describe the Building
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random2,
        max_length=12, editable=False)
    name = models.CharField(max_length=80)
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    catg = models.CharField(max_length=100)
    sub_catg = models.CharField(max_length=100)
    building_no = models.CharField(max_length=100, unique=True)
    land_area = models.IntegerField()
    build_area = models.IntegerField()
    build_date = models.DateField()
    floor = models.IntegerField()
    toilet = models.IntegerField()
    roof_type = models.CharField(max_length=100)
    road_access = models.BooleanField(default=False)
    elect_access = models.BooleanField(default=False)
    image = models.ImageField(upload_to='building_images/%Y/%m/%d',
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg'])], null=True, blank=True)
    geom = models.PointField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "building"
        verbose_name = "Building"
        verbose_name_plural = "Buildings"

    def __str__(self):
        return self.name
