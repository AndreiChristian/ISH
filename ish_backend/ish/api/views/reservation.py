from rest_framework import generics
from .models import FacilityCategory, FacilitySubCategory, FacilityItem, Region, Profile, Reservation, ProfileFacilityCategory, ProfileFacilitySubCategory, ProfileFacilityItem
from api.serializers import FacilityCategorySerializer, FacilitySubCategorySerializer, ProfileFacilityItemSerializer, RegionSerializer, ProfileSerializer, ReservationSerializer, FacilityItemSerializer, ProfileFacilityCategorySerializer, ProfileFacilitySubCategorySerializer



class ProfileListCreateView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ReservationListCreateView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer


class ReservationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer


class ProfileFacilityCategoryListCreateView(generics.ListCreateAPIView):
    queryset = ProfileFacilityCategory.objects.all()
    serializer_class = ProfileFacilityCategorySerializer


class ProfileFacilityCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProfileFacilityCategory.objects.all()
    serializer_class = ProfileFacilityCategorySerializer


class ProfileFacilitySubCategoryListCreateView(generics.ListCreateAPIView):
    queryset = ProfileFacilitySubCategory.objects.all()
    serializer_class = ProfileFacilitySubCategorySerializer


class ProfileFacilitySubCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProfileFacilitySubCategory.objects.all()
    serializer_class = ProfileFacilitySubCategorySerializer


class ProfileFacilityItemListCreateView(generics.ListCreateAPIView):
    queryset = ProfileFacilityItem.objects.all()
    serializer_class = ProfileFacilityItemSerializer


class ProfileFacilityItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProfileFacilityItem.objects.all()
    serializer_class = ProfileFacilityItemSerializer

