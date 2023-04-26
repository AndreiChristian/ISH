from rest_framework import serializers
from .models import Profile, Reservation, ProfileFacilityCategory, ProfileFacilitySubCategory, ProfileFacilityItem

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'first_name', 'last_name', 'email', 'user']

class ReservationSerializer(serializers.ModelSerializer):
    profiles = ProfileSerializer(many=True)

    class Meta:
        model = Reservation
        fields = ['id', 'property', 'profiles', 'start_date', 'end_date']

class ProfileFacilityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFacilityCategory
        fields = ['id', 'profile', 'facility_category', 'requested_call', 'touched']

class ProfileFacilitySubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFacilitySubCategory
        fields = ['id', 'profile', 'facility_subcategory', 'requested_call', 'touched']

class ProfileFacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFacilityItem
        fields = ['id', 'profile', 'facility_item', 'selected']
