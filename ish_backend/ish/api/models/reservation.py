from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.db.models import Q

from .import Property, FacilitySubCategory, FacilityCategory, FacilityItem

class Profile(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile', null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Reservation(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name='reservations')
    profiles = models.ManyToManyField(Profile, related_name='reservations')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"Reservation {self.id} at {self.property}"


class ProfileFacilityCategory(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_facility_categories')
    facility_category = models.ForeignKey(FacilityCategory, on_delete=models.CASCADE, related_name='profile_facility_categories')
    requested_call = models.BooleanField(default=False)
    touched = models.BooleanField(default=False)

    class Meta:
        unique_together = ('profile', 'facility_category')

    def __str__(self):
        return f"{self.profile} - {self.facility_category}"

class ProfileFacilitySubCategory(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_facility_subcategories')
    facility_subcategory = models.ForeignKey(FacilitySubCategory, on_delete=models.CASCADE, related_name='profile_facility_subcategories')
    requested_call = models.BooleanField(default=False)
    touched = models.BooleanField(default=False)


    class Meta:
        unique_together = ('profile', 'facility_subcategory')

    def __str__(self):
        return f"{self.profile} - {self.facility_subcategory}"


class ProfileFacilityItem(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_facility_items')
    facility_item = models.ForeignKey(FacilityItem, on_delete=models.CASCADE, related_name='profile_facility_items')
    selected = models.BooleanField(default=False)

    class Meta:
        unique_together = ('profile', 'facility_item')

    def __str__(self):
        return f"{self.profile} - {self.facility_item}"
