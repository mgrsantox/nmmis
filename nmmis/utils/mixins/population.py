from django.db import models


class Population(models.Model):
    total = models.PositiveIntegerField()
    male = models.PositiveIntegerField()
    female = models.PositiveIntegerField()
    hindu = models.PositiveIntegerField()
    buddhist = models.PositiveIntegerField()
    muslim = models.PositiveIntegerField()
    other = models.PositiveIntegerField()

    class Meta:
        abstract = True
