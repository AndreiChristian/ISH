from rest_framework import generics
from api.models import FacilityCategory, FacilitySubCategory, FacilityItem, Region, Profile, Reservation, ProfileFacilityCategory, ProfileFacilitySubCategory, ProfileFacilityItem
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

