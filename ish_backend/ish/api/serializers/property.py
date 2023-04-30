from rest_framework import serializers
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem, FacilityCategory, FacilityItem, FacilitySubCategory


class PropertySerializer(serializers.ModelSerializer):
    property_facility_categories = serializers.StringRelatedField(many=True)
    property_facility_subcategories = serializers.StringRelatedField(many=True)
    property_facility_items = serializers.StringRelatedField(many=True)

    class Meta:
        model = Property
        fields = '__all__'


class PropertyFacilityCategorySerializer(serializers.ModelSerializer):
    property = serializers.SlugRelatedField(
        queryset=Property.objects.all(),
        slug_field='name',
        read_only=False
    )
    facility_category = serializers.SlugRelatedField(
        queryset=FacilityCategory.objects.all(),
        slug_field='name',
        read_only=False,


    )

    class Meta:
        model = PropertyFacilityCategory
        fields = ('id', 'property', 'facility_category', 'available')


class PropertyFacilitySubCategorySerializer(serializers.ModelSerializer):

    property = serializers.SlugRelatedField(
        queryset=Property.objects.all(),
        slug_field='name',
        read_only=False
    )
    facility_subcategory = serializers.SlugRelatedField(
        queryset=FacilitySubCategory.objects.all(),
        slug_field='name',
        read_only=False,


    )

    class Meta:
        model = PropertyFacilitySubCategory
        fields = ['id', 'property', 'facility_subcategory', 'available']


class PropertyFacilityItemSerializer(serializers.ModelSerializer):
    property = serializers.SlugRelatedField(
        queryset=Property.objects.all(),
        slug_field='name',
        read_only=False
    )
    facility_item = serializers.SlugRelatedField(
        queryset=FacilityItem.objects.all(),
        slug_field='name',
        read_only=False,
    )

    class Meta:
        model = PropertyFacilityItem
        fields = ['id', 'property', 'facility_item', 'available']
