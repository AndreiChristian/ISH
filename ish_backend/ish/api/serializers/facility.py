from rest_framework import serializers
from api.models import FacilityCategory, FacilitySubCategory, FacilityItem


class FacilityItemSerializer(serializers.ModelSerializer):
    subcategory = serializers.SlugRelatedField(
        queryset=FacilitySubCategory.objects.all(),
        slug_field='name'
    )

    class Meta:
        model = FacilityItem
        fields = ['id', 'name', 'price', 'adult_only', 'level', 'subcategory']


class FacilitySubCategorySerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        queryset=FacilityCategory.objects.all(),
        slug_field='name'
    )

    items = serializers.StringRelatedField(many=True)

    class Meta:
        model = FacilitySubCategory
        fields = ['id', 'name', 'category', 'items']


class FacilityCategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.StringRelatedField(many=True)

    class Meta:
        model = FacilityCategory
        fields = ['id', 'name',  'subcategories']
