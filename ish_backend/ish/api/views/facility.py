from rest_framework import generics
from api.models import FacilityCategory, FacilitySubCategory, FacilityItem, Region, Profile, Reservation, ProfileFacilityCategory, ProfileFacilitySubCategory, ProfileFacilityItem
from api.serializers import FacilityCategorySerializer, FacilitySubCategorySerializer, ProfileFacilityItemSerializer, RegionSerializer, ProfileSerializer, ReservationSerializer, FacilityItemSerializer, ProfileFacilityCategorySerializer, ProfileFacilitySubCategorySerializer


class FacilityCategoryListCreateView(generics.ListCreateAPIView):
    queryset = FacilityCategory.objects.all()
    serializer_class = FacilityCategorySerializer


class FacilityCategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacilityCategory.objects.all()
    serializer_class = FacilityCategorySerializer


class FacilitySubCategoryListCreateView(generics.ListCreateAPIView):
    queryset = FacilitySubCategory.objects.all()
    serializer_class = FacilitySubCategorySerializer


class FacilitySubCategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacilitySubCategory.objects.all()
    serializer_class = FacilitySubCategorySerializer


class FacilityItemListCreateView(generics.ListCreateAPIView):
    queryset = FacilityItem.objects.all()
    serializer_class = FacilityItemSerializer


class FacilityItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacilityItem.objects.all()
    serializer_class = FacilityItemSerializer
