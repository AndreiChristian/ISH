from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


# class BaseUser(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(unique=True)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = CustomUserManager()

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = []

#     def __str__(self):
#         return self.email

class BaseUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    # Add related_name arguments to the ManyToManyField and ForeignKey fields
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name=('groups'),
        blank=True,
        help_text=(
            'The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        related_query_name="base_user",
        related_name="base_user_set",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name=('user permissions'),
        blank=True,
        help_text=('Specific permissions for this user.'),
        related_query_name="base_user",
        related_name="base_user_set",
    )

    def __str__(self):
        return self.email


class Manager(BaseUser):
    regions = models.ManyToManyField('Region', related_name='managers')


class Staff(BaseUser):
    department = models.CharField(max_length=100)
    region = models.ForeignKey(
        'Region', on_delete=models.CASCADE, related_name='staff_members')


class Guest(BaseUser):
    # Add any specific fields for guests here, if needed

    @property
    def past_reservations(self):
        return self.reservations.filter(end_date__lt=datetime.date.today())

    @property
    def current_reservations(self):
        today = datetime.date.today()
        return self.reservations.filter(start_date__lte=today, end_date__gte=today)
