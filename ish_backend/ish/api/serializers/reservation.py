from rest_framework import serializers
from api.models import Profile, Reservation, ProfileFacilityCategory, ProfileFacilitySubCategory, ProfileFacilityItem
from api.serializers import PropertySerializer


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'first_name', 'last_name', 'email', 'user']


class ReservationSerializer(serializers.ModelSerializer):
    # profiles = ProfileSerializer(many=True)
    profiles = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Profile.objects.all())

    class Meta:
        model = Reservation
        fields = ['id', 'property', 'profiles', 'adults',
                  'children', 'start_date', 'end_date']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['property'] = PropertySerializer(instance.property).data.get('name')
        return representation    


class ProfileFacilityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFacilityCategory
        fields = ['id', 'profile', 'facility_category',
                  'requested_call', 'touched']


class ProfileFacilitySubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFacilitySubCategory
        fields = ['id', 'profile', 'facility_subcategory',
                  'requested_call', 'touched']


class ProfileFacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFacilityItem
        fields = ['id', 'profile', 'facility_item', 'selected']
