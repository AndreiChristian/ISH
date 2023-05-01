from django.db import models
from django.contrib.auth.models import User

class GeneralManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class RegionalManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    region = models.CharField(max_length=100)

class PropertyManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    region = models.CharField(max_length=100)
    property_name = models.CharField(max_length=100)

class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100)
    region = models.CharField(max_length=100, blank=True, null=True)
