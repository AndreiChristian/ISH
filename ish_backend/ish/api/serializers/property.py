from rest_framework import serializers
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem

class PropertySerializer(serializers.ModelSerializer):
    property_facility_categories = serializers.StringRelatedField(many=True)
    property_facility_subcategories = serializers.StringRelatedField(many=True) 
    property_facility_items = serializers.StringRelatedField(many=True)
    class Meta:
        model = Property
        fields = '__all__'

class PropertyFacilityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyFacilityCategory
        # fields = ['id', 'property', 'facility_category', 'available']
        fiels = '__all_'

class PropertyFacilitySubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyFacilitySubCategory
        fields = ['id', 'property', 'facility_subcategory', 'available']

class PropertyFacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyFacilityItem
        fields = ['id', 'property', 'facility_item', 'available']
