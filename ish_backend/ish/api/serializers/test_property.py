from rest_framework import serializers
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem, FacilityItem, FacilitySubCategory, FacilityCategory
from api.serializers import FacilityCategorySerializer, FacilityItemSerializer, FacilitySubCategorySerializer
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem, FacilityCategory, FacilityItem, FacilitySubCategory

class TestFacilityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityCategory
        fields = ['id', 'name']

class TestPropertyFacilityCategorySerializer(serializers.ModelSerializer):
    facility_category = TestFacilityCategorySerializer()

    class Meta:
        model = PropertyFacilityCategory
        fields = ('id', 'facility_category', 'available')

class TestFacilitySubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilitySubCategory
        fields = ['id','name']
class TestPropertyFacilitySubCategorySerializer(serializers.ModelSerializer):
    facility_subcategory = TestFacilitySubCategorySerializer()

    class Meta:
        model = PropertyFacilitySubCategory
        fields = ['id',  'facility_subcategory', 'available']


class TestPropertyFacilityItemSerializer(serializers.ModelSerializer):
    facility_item = FacilityItemSerializer()

    class Meta:
        model = PropertyFacilityItem
        fields = ['id', 'facility_item', 'available']


class TestPropertySerializer(serializers.ModelSerializer):

    property_facility_categories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PropertyFacilityCategory.objects.all())

    property_facility_subcategories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PropertyFacilitySubCategory.objects.all())

    property_facility_items = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PropertyFacilityItem.objects.all())

    class Meta:
        model = Property
        fields = '__all__'


class TestPropertyReadSerializer(serializers.ModelSerializer):
    property_facility_categories = TestPropertyFacilityCategorySerializer(
        many=True)
    property_facility_subcategories = TestPropertyFacilitySubCategorySerializer(
        many=True)
    property_facility_items = TestPropertyFacilityItemSerializer(many=True)

    class Meta:
        model = Property
        fields = '__all__'


class TestPropertyCreateUpdateSerializer(serializers.ModelSerializer):
    property_facility_categories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=FacilityCategory.objects.all(), write_only=True)
    property_facility_subcategories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=FacilitySubCategory.objects.all(), write_only=True)
    property_facility_items = serializers.PrimaryKeyRelatedField(
        many=True, queryset=FacilityItem.objects.all(), write_only=True)

    class Meta:
        model = Property
        fields = '__all__'

    def create(self, validated_data):
        facility_categories = validated_data.pop(
            'property_facility_categories', [])
        facility_subcategories = validated_data.pop(
            'property_facility_subcategories', [])
        facility_items = validated_data.pop('property_facility_items', [])

        property_instance = Property.objects.create(**validated_data)

        for category in facility_categories:
            PropertyFacilityCategory.objects.create(
                property=property_instance, facility_category=category)

        for subcategory in facility_subcategories:
            PropertyFacilitySubCategory.objects.create(
                property=property_instance, facility_subcategory=subcategory)

        for item in facility_items:
            PropertyFacilityItem.objects.create(
                property=property_instance, facility_item=item)

        return property_instance

    def update(self, instance, validated_data):
        # Update the simple fields
        for field in ['name', 'location', 'square_meters', 'description', 'long', 'lat', 'city', 'street', 'number', 'bathrooms', 'bedrooms', 'price', 'region']:
            if field in validated_data:
                setattr(instance, field, validated_data[field])
        instance.save()

    # Update the related fields if they are present in the request
        if 'property_facility_categories' in validated_data:
            PropertyFacilityCategory.objects.filter(property=instance).delete()
            property_facility_categories_data = validated_data.pop(
                'property_facility_categories', [])
            for category in property_facility_categories_data:
                PropertyFacilityCategory.objects.create(
                    property=instance, facility_category_id=category.id)

        if 'property_facility_subcategories' in validated_data:
            PropertyFacilitySubCategory.objects.filter(
                property=instance).delete()
            property_facility_subcategories_data = validated_data.pop(
                'property_facility_subcategories', [])
            for subcategory in property_facility_subcategories_data:
                PropertyFacilitySubCategory.objects.create(
                    property=instance, facility_subcategory_id=subcategory.id)

        if 'property_facility_items' in validated_data:
            PropertyFacilityItem.objects.filter(property=instance).delete()
            property_facility_items_data = validated_data.pop(
                'property_facility_items', [])
            for item in property_facility_items_data:
                PropertyFacilityItem.objects.create(
                    property=instance, facility_item_id=item.id)

        return instance
