from rest_framework import serializers
from api.models import Property, PropertyFacilityCategory, PropertyFacilitySubCategory, PropertyFacilityItem, FacilityItem, FacilitySubCategory, FacilityCategory
from api.serializers import FacilityCategorySerializer, FacilityItemSerializer, FacilitySubCategorySerializer


class TestFacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityItem
        fields = ['id', 'name', 'subcategory']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['subcategory'] = instance.subcategory.name
        return representation


class TestFacilitySubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilitySubCategory
        fields = ['id', 'name', 'category', 'items']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['category'] = instance.category.name
        representation['items'] = TestFacilityItemSerializer(instance.items.filter(
            property_facility_items__property=self.context['property']), many=True).data
        return representation


class TestFacilityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityCategory
        fields = ['id', 'name', 'subcategories']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['subcategories'] = TestFacilitySubCategorySerializer(instance.subcategories.filter(
            property_facility_subcategories__property=self.context['property']), many=True, context=self.context).data
        return representation


# class TestPropertySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Property
#         fields = [
#             'id', 'name', 'location', 'square_meters', 'region', 'description', 'long', 'lat', 'city', 'street',
#             'number', 'bathrooms', 'bedrooms', 'price', 'facility_categories'
#         ]

#     def to_representation(self, instance):
#         representation = super().to_representation(instance)
#         property_facility_categories = PropertyFacilityCategory.objects.filter(
#             property=instance)
#         facility_categories = [
#             pfc.facility_category for pfc in property_facility_categories]
#         representation['facility_categories'] = FacilityCategorySerializer(
#             facility_categories, many=True, context={'property': instance}).data
#         return representation

class TestPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = [
            'id', 'name', 'location', 'square_meters', 'region', 'description', 'long', 'lat', 'city', 'street',
            'number', 'bathrooms', 'bedrooms', 'price', 'facility_categories'
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        property_facility_categories = PropertyFacilityCategory.objects.filter(
            property=instance)
        facility_categories = [
            pfc.facility_category for pfc in property_facility_categories]
        representation['facility_categories'] = TestFacilityCategorySerializer(
            facility_categories, many=True, context={'property': instance}).data
        return representation

