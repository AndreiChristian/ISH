from rest_framework import serializers
from api.models import FacilityCategory, FacilitySubCategory, FacilityItem


class FacilityItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityItem
        fields = ['id', 'name', 'price', 'adult_only', 'level']


class FacilitySubCategorySerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(
        queryset=FacilityItem.objects.all(), many=True)

    class Meta:
        model = FacilitySubCategory
        fields = ['id', 'name', 'category', 'items']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['items'] = FacilityItemSerializer(
            instance.items.all(), many=True).data
        return representation


class FacilityCategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.PrimaryKeyRelatedField(
        queryset=FacilitySubCategory.objects.all(), many=True)

    class Meta:
        model = FacilityCategory
        fields = ['id', 'name',  'subcategories']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['subcategories'] = FacilitySubCategorySerializer(
            instance.subcategories.all(), many=True).data
        return representation
