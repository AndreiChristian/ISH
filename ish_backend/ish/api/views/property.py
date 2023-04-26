from rest_framework import generics
from api.models import Property, PropertyFacilityCategory, PropertyFacilityItem, PropertyFacilitySubCategory
from api.serializers import PropertySerializer, PropertyFacilityCategorySerializer, PropertyFacilityItemSerializer, PropertyFacilitySubCategorySerializer


class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer


class PropertyRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer


class PropertyFacilityCategoryListCreateView(generics.ListCreateAPIView):
    queryset = PropertyFacilityCategory.objects.all()
    serializer_class = PropertyFacilityCategorySerializer


class PropertyFacilityCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PropertyFacilityCategory.objects.all()
    serializer_class = PropertyFacilityCategorySerializer


class PropertyFacilitySubCategoryListCreateView(generics.ListCreateAPIView):
    queryset = PropertyFacilitySubCategory.objects.all()
    serializer_class = PropertyFacilitySubCategorySerializer


class PropertyFacilitySubCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PropertyFacilitySubCategory.objects.all()
    serializer_class = PropertyFacilitySubCategorySerializer


class PropertyFacilityItemListCreateView(generics.ListCreateAPIView):
    queryset = PropertyFacilityItem.objects.all()
    serializer_class = PropertyFacilityItemSerializer


class PropertyFacilityItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PropertyFacilityItem.objects.all()
    serializer_class = PropertyFacilityItemSerializer
