from rest_framework import serializers
from .models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id', 'name', 'location', 'square_meters', 'region']

class PropertyFacilityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyFacilityCategory
        fields = ['id', 'property', 'facility_category', 'available']

class PropertyFacilitySubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyFacilitySubCategory
        fields = ['id', 'property', 'facility_subcategory', 'available']

class PropertyFacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyFacilityItem
        fields = ['id', 'property', 'facility_item', 'available']
