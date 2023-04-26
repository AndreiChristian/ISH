from rest_framework import serializers
from .models import FacilityCategory, FacilitySubCategory, FacilityItem, Region, Property, Reservation, Manager, Staff, Guest


class FacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityItem
        fields = '__all__'


class FacilitySubCategorySerializer(serializers.ModelSerializer):
    items = FacilityItemSerializer(many=True, read_only=True)

    class Meta:
        model = FacilitySubCategory
        fields = '__all__'


class FacilityCategorySerializer(serializers.ModelSerializer):
    subcategories = FacilitySubCategorySerializer(many=True, read_only=True)

    class Meta:
        model = FacilityCategory
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'


class PropertySerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)
    facility_categories = FacilityCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Property
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    property = PropertySerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name')


class ManagerSerializer(serializers.ModelSerializer):
    regions = RegionSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Manager
        fields = '__all__'


class StaffSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Staff
        fields = '__all__'


class GuestSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Guest
        fields = '__all__'
