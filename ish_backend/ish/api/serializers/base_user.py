from rest_framework import serializers
from .models import Manager, Staff, Guest

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = ['id', 'email', 'is_active', 'is_staff', 'regions']

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ['id', 'email', 'is_active', 'is_staff', 'department', 'region']

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'email', 'is_active', 'is_staff']
