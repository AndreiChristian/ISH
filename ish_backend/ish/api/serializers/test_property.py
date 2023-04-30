from rest_framework import serializers
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem, FacilityItem, FacilitySubCategory, FacilityCategory
from api.serializers import FacilityCategorySerializer, FacilityItemSerializer, FacilitySubCategorySerializer

from rest_framework import serializers
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem, FacilityCategory, FacilityItem, FacilitySubCategory


class TestPropertyFacilityCategorySerializer(serializers.ModelSerializer):
    # property = serializers.SlugRelatedField(
    #     queryset=Property.objects.all(),
    #     slug_field='name',
    #     read_only=False
    # )
    facility_category = serializers.SlugRelatedField(
        queryset=FacilityCategory.objects.all(),
        slug_field='name',
        read_only=False,

    )

    class Meta:
        model = PropertyFacilityCategory
        fields = ('id', 'facility_category', 'available')


class TestPropertyFacilitySubCategorySerializer(serializers.ModelSerializer):

    # property = serializers.SlugRelatedField(
    #     queryset=Property.objects.all(),
    #     slug_field='name',
    #     read_only=False
    # )
    facility_subcategory = serializers.SlugRelatedField(
        queryset=FacilitySubCategory.objects.all(),
        slug_field='name',
        read_only=False,

    )

    class Meta:
        model = PropertyFacilitySubCategory
        fields = ['id',  'facility_subcategory', 'available']


class TestPropertyFacilityItemSerializer(serializers.ModelSerializer):
    # property = serializers.SlugRelatedField(
    #     queryset=Property.objects.all(),
    #     slug_field='name',
    #     read_only=False
    # )
    facility_item = FacilityItemSerializer()

    class Meta:
        model = PropertyFacilityItem
        fields = ['id', 'facility_item', 'available']


class TestPropertySerializer(serializers.ModelSerializer):
    # property_facility_categories = TestPropertyFacilityCategorySerializer(
    #     many=True)
    # property_facility_subcategories = TestPropertyFacilitySubCategorySerializer(
    #     many=True)
    # property_facility_items = TestPropertyFacilityItemSerializer(many=True)

    property_facility_categories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PropertyFacilityCategory.objects.all())

    property_facility_subcategories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PropertyFacilitySubCategory.objects.all())

    property_facility_items = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PropertyFacilityItem.objects.all())

    class Meta:
        model = Property
        fields = '__all__'

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['items'] = FacilityItemSerializer(
    #         instance.items.all(), many=True).data
    #     return representation

class TestPropertyReadSerializer(serializers.ModelSerializer):
    property_facility_categories = TestPropertyFacilityCategorySerializer(many=True)
    property_facility_subcategories = TestPropertyFacilitySubCategorySerializer(many=True)
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
        facility_categories = validated_data.pop('property_facility_categories', [])
        facility_subcategories = validated_data.pop('property_facility_subcategories', [])
        facility_items = validated_data.pop('property_facility_items', [])

        property_instance = Property.objects.create(**validated_data)

        for category in facility_categories:
            PropertyFacilityCategory.objects.create(property=property_instance, facility_category=category)

        for subcategory in facility_subcategories:
            PropertyFacilitySubCategory.objects.create(property=property_instance, facility_subcategory=subcategory)

        for item in facility_items:
            PropertyFacilityItem.objects.create(property=property_instance, facility_item=item)

        return property_instance

    def update(self, instance, validated_data):
        facility_categories = validated_data.pop('property_facility_categories', [])
        facility_subcategories = validated_data.pop('property_facility_subcategories', [])
        facility_items = validated_data.pop('property_facility_items', [])

        instance = super().update(instance, validated_data)

        instance.property_facility_categories.clear()
        instance.property_facility_subcategories.clear()
        instance.property_facility_items.clear()

        for category in facility_categories:
            PropertyFacilityCategory.objects.create(property=instance, facility_category=category)

        for subcategory in facility_subcategories:
            PropertyFacilitySubCategory.objects.create(property=instance, facility_subcategory=subcategory)

        for item in facility_items:
            PropertyFacilityItem.objects.create(property=instance, facility_item=item)

        return instance
