from django.db import models
from datetime import datetime
from django.db.models import Q

from .import FacilityCategory, Region

def daterange(start_date, end_date):
    for n in range(int((end_date - start_date).days) + 1):
        yield start_date + datetime.timedelta(n)


class Property(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    square_meters = models.IntegerField()
    facility_categories = models.ManyToManyField(FacilityCategory)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, related_name='properties')

    def __str__(self):
        return self.name

    @property
    def reserved_dates(self):
        reservations = self.reservations.filter(
            Q(start_date__gte=datetime.date.today()) | Q(
                end_date__gte=datetime.date.today())
        )
        reserved_dates = []
        for reservation in reservations:
            reserved_dates.extend([date for date in daterange(
                reservation.start_date, reservation.end_date)])

        return reserved_dates
