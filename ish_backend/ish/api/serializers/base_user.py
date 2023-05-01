from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Department, GeneralManager, RegionalManager, PropertyManager, Staff, Guest, Region, Property
from api.serializers import PropertySerializer, RegionSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class GeneralManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = GeneralManager
        fields = ('id', 'user')


class RegionalManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    region = serializers.StringRelatedField()

    class Meta:
        model = RegionalManager
        fields = ('id', 'user', 'region')


class PropertyManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    region = serializers.StringRelatedField()
    property = serializers.StringRelatedField()

    class Meta:
        model = PropertyManager
        fields = ('id', 'user', 'region', 'property')


class StaffSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    region = serializers.StringRelatedField()
    department = serializers.StringRelatedField()

    class Meta:
        model = Staff
        fields = ('id', 'user', 'region', 'department')


class GuestSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Guest
        fields = ('id', 'user')
