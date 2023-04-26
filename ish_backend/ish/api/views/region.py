from rest_framework import generics
from api.models import FacilityCategory, FacilitySubCategory, FacilityItem, Region, Profile, Reservation, ProfileFacilityCategory, ProfileFacilitySubCategory, ProfileFacilityItem
from api.serializers import FacilityCategorySerializer, FacilitySubCategorySerializer, ProfileFacilityItemSerializer, RegionSerializer, ProfileSerializer, ReservationSerializer, FacilityItemSerializer, ProfileFacilityCategorySerializer, ProfileFacilitySubCategorySerializer


class RegionListCreateView(generics.ListCreateAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class RegionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer
