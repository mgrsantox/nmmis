from django.contrib.gis.db import models
from django.core.validators import FileExtensionValidator
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
    district = models.ForeignKey(
        District, on_delete=models.SET_NULL, null=True)
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
    municipal = models.ForeignKey(
        Municipal, on_delete=models.SET_NULL, null=True)
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


class Road(TimeStamped):
    """
    Class that describe the Road
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random,
        max_length=12, editable=False)
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    type = models.CharField(max_length=100)
    surface = models.CharField(max_length=100)
    length = models.IntegerField()
    width = models.IntegerField()
    geom = models.LineStringField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "road"
        verbose_name = "Road"
        verbose_name_plural = "Roads"

    def __str__(self):
        return self.name


class Telecom(TimeStamped):
    """
    Class that describe the Telecom Tower
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random,
        max_length=12, editable=False)
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    # name = models.CharField(max_length=80)
    type = models.CharField(max_length=100)
    image = models.ImageField(upload_to='telecom/%Y/%m/%d',
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg'])], null=True, blank=True)
    geom = models.PointField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "telecom"
        verbose_name = "Telecom"
        verbose_name_plural = "Telecoms"

    def __str__(self):
        return self.type


class Transformer(TimeStamped):
    """
    Class that describe the Transformer
    """
    id = models.CharField(
        primary_key=True, default=aphnum_random,
        max_length=12, editable=False)
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    # name = models.CharField(max_length=80)
    type = models.CharField(max_length=100)
    image = models.ImageField(upload_to='transformer/%Y/%m/%d',
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg'])], null=True, blank=True)
    geom = models.PointField(srid=4326)

    class Meta:
        ordering = ['id']
        db_table = "transformer"
        verbose_name = "Transformer"
        verbose_name_plural = "Transformers"

    def __str__(self):
        return self.type
