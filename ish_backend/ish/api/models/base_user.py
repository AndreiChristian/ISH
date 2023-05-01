from django.db import models
from django.contrib.auth.models import User
from api.models import Region, Property


class Department(models.Model):
    name = models.CharField(max_length=50)


class GeneralManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class RegionalManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)


class PropertyManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    property = models.OneToOneField(Property, on_delete=models.CASCADE)


class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)


class Guest(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
