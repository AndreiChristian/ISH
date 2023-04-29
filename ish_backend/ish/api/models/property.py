from django.db import models
from datetime import datetime
from django.db.models import Q

from .import FacilityCategory, Region, FacilityItem, FacilitySubCategory


def daterange(start_date, end_date):
    for n in range(int((end_date - start_date).days) + 1):
        yield start_date + datetime.timedelta(n)


class Property(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    square_meters = models.IntegerField()
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, related_name='properties')
    description = models.TextField(blank=True, null=True)
    long = models.TextField(blank=True, null=True)
    lat = models.TextField(blank=True, null=True)
    city = models.TextField(blank=True, null=True)
    street = models.TextField(blank=True, null=True)
    number = models.PositiveIntegerField(blank=True, null=True)
    bathrooms = models.PositiveIntegerField(blank=True, null=True)
    bedrooms = models.PositiveIntegerField(blank=True, null=True)
    price = models.PositiveIntegerField(blank=True, null=True)

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

    @property
    def facility_categories(self):
        return self.property_facility_categories.all()

    @property
    def facility_subcategories(self):
        return self.property_facility_subcategories.all()

    @property
    def facility_items(self):
        return self.property_facility_items.all()


class PropertyFacilityCategory(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name='property_facility_categories')
    facility_category = models.ForeignKey(
        FacilityCategory, on_delete=models.CASCADE, related_name='property_facility_categories')
    available = models.BooleanField(default=True)

    class Meta:
        unique_together = ('property', 'facility_category')

    def __str__(self):
        return f"{self.facility_category}"


class PropertyFacilitySubCategory(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name='property_facility_subcategories')
    facility_subcategory = models.ForeignKey(
        FacilitySubCategory, on_delete=models.CASCADE, related_name='property_facility_subcategories')
    available = models.BooleanField(default=True)

    class Meta:
        unique_together = ('property', 'facility_subcategory')

    def __str__(self):
        return f"{self.facility_subcategory}-{self.facility_subcategory.category}"


class PropertyFacilityItem(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name='property_facility_items')
    facility_item = models.ForeignKey(
        FacilityItem, on_delete=models.CASCADE, related_name='property_facility_items')
    available = models.BooleanField(default=True)

    class Meta:
        unique_together = ('property', 'facility_item')

    def __str__(self):
        return f"{self.facility_item.subcategory}-{self.facility_item}"
