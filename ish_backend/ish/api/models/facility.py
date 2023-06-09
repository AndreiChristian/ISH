from django.db import models
from datetime import datetime
# Create your models here.


class FacilityCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class FacilitySubCategory(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(
        FacilityCategory, on_delete=models.CASCADE, related_name='subcategories')

    def __str__(self):
        return self.name


class FacilityItem(models.Model):
    LEVEL_CHOICES = (
        ('IND', 'Individual'),
        ('ROM', 'Room'),
        ('PRP', 'Property'),
    )

    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    adult_only = models.BooleanField(default=False)
    level = models.CharField(max_length=3, choices=LEVEL_CHOICES)

    def __str__(self):
        return self.name

    subcategory = models.ForeignKey(
        FacilitySubCategory, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.name

