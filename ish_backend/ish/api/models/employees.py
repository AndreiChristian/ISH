"""
from django.db import models
from api.models import Region, Property


class Department(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Staff(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class GeneralManager(Staff):
    pass


class RegionalManager(Staff):
    managed_region = models.OneToOneField(
        Region, on_delete=models.CASCADE, related_name="regional_manager")


class PropertyManager(Staff):
    managed_property = models.OneToOneField(
        Property, on_delete=models.CASCADE, related_name="property_manager")

"""