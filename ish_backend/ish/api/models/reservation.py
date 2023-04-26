from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.db.models import Q

from .import Property

class Reservation(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name='reservations')
    users = models.ManyToManyField(User, related_name='reservations')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"Reservation {self.id} at {self.property}"
