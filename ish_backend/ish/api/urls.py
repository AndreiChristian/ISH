from django.urls import path
from api.views import (FacilityCategoryListCreateView, FacilityCategoryDetailView,
                    FacilitySubCategoryListCreateView, FacilitySubCategoryDetailView,
                    FacilityItemListCreateView, FacilityItemDetailView,
                    RegionListCreateView, RegionRetrieveUpdateDestroyView,
                    ProfileListCreateView, ProfileRetrieveUpdateDestroyView,
                    ReservationListCreateView, ReservationRetrieveUpdateDestroyView,
                    ProfileFacilityCategoryListCreateView, ProfileFacilityCategoryRetrieveUpdateDestroyView,
                    ProfileFacilitySubCategoryListCreateView, ProfileFacilitySubCategoryRetrieveUpdateDestroyView,
                    ProfileFacilityItemListCreateView, ProfileFacilityItemRetrieveUpdateDestroyView,
                    PropertyListCreateView, PropertyRetrieveUpdateDestroyView,
                    PropertyFacilityCategoryListCreateView, PropertyFacilityCategoryRetrieveUpdateDestroyView,
                    PropertyFacilitySubCategoryListCreateView, PropertyFacilitySubCategoryRetrieveUpdateDestroyView,
                    PropertyFacilityItemListCreateView, PropertyFacilityItemRetrieveUpdateDestroyView,
                    ManagerListCreateView, ManagerRetrieveUpdateDestroyView,
                    StaffListCreateView, StaffRetrieveUpdateDestroyView,
                    GuestListCreateView, GuestRetrieveUpdateDestroyView)

urlpatterns = [
    # Facility Category views
    path('facility_categories/', FacilityCategoryListCreateView.as_view(),
         name='facility_category_list_create'),
    path('facility_categories/<int:pk>/',
         FacilityCategoryDetailView.as_view(), name='facility_category_detail'),

    # Facility SubCategory views
    path('facility_subcategories/', FacilitySubCategoryListCreateView.as_view(),
         name='facility_subcategory_list_create'),
    path('facility_subcategories/<int:pk>/',
         FacilitySubCategoryDetailView.as_view(), name='facility_subcategory_detail'),

    # Facility Item views
    path('facility_items/', FacilityItemListCreateView.as_view(),
         name='facility_item_list_create'),
    path('facility_items/<int:pk>/', FacilityItemDetailView.as_view(),
         name='facility_item_detail'),

    # Region views
    path('regions/', RegionListCreateView.as_view(), name='region_list_create'),
    path('regions/<int:pk>/', RegionRetrieveUpdateDestroyView.as_view(),
         name='region_detail'),

    # Profile views
    path('profiles/', ProfileListCreateView.as_view(), name='profile_list_create'),
    path('profiles/<int:pk>/', ProfileRetrieveUpdateDestroyView.as_view(),
         name='profile_detail'),

    # Reservation views
    path('reservations/', ReservationListCreateView.as_view(),
         name='reservation_list_create'),
    path('reservations/<int:pk>/',
         ReservationRetrieveUpdateDestroyView.as_view(), name='reservation_detail'),

    # Profile Facility Category views
    path('profile_facility_categories/', ProfileFacilityCategoryListCreateView.as_view(),
         name='profile_facility_category_list_create'),
    path('profile_facility_categories/<int:pk>/',
         ProfileFacilityCategoryRetrieveUpdateDestroyView.as_view(), name='profile_facility_category_detail'),

    # Profile Facility SubCategory views
    path('profile_facility_subcategories/', ProfileFacilitySubCategoryListCreateView.as_view(),
         name='profile_facility_subcategory_list_create'),
    path('profile_facility_subcategories/<int:pk>/',
         ProfileFacilitySubCategoryRetrieveUpdateDestroyView.as_view(), name='profile_facility_subcategory_detail'),

    # Profile Facility Item views
    path('profile_facility_items/', ProfileFacilityItemListCreateView.as_view(),
         name='profile_facility_item_list_create'),
    path('profile_facility_items/<int:pk>/',
         ProfileFacilityItemRetrieveUpdateDestroyView.as_view(), name='profile_facility_item_detail'),

    # Property views
    path('properties/', PropertyListCreateView.as_view(),
         name='property_list_create'),
    path('properties/<int:pk>/',
         PropertyRetrieveUpdateDestroyView.as_view(), name='property_detail'),

    # Property Facility Category views
    path('property_facility_categories/', PropertyFacilityCategoryListCreateView.as_view(),
         name='property_facility_category_list_create'),
    path('property_facility_categories/<int:pk>/',
         PropertyFacilityCategoryRetrieveUpdateDestroyView.as_view(), name='property_facility_category_detail'),

    # Property Facility SubCategory views
    path('property_facility_subcategories/', PropertyFacilitySubCategoryListCreateView.as_view(),
         name='property_facility_subcategory_list_create'),
    path('property_facility_subcategories/<int:pk>/',
         PropertyFacilitySubCategoryRetrieveUpdateDestroyView.as_view(), name='property_facility_subcategory_detail'),

    # Property Facility Item views
    path('property_facility_items/', PropertyFacilityItemListCreateView.as_view(),
         name='property_facility_item_list_create'),
    path('property_facility_items/<int:pk>/',
         PropertyFacilityItemRetrieveUpdateDestroyView.as_view(), name='property_facility_item_detail'),

    # Manager views
    path('managers/', ManagerListCreateView.as_view(), name='manager_list_create'),
    path('managers/<int:pk>/', ManagerRetrieveUpdateDestroyView.as_view(),
         name='manager_detail'),

    # Staff views
    path('staff/', StaffListCreateView.as_view(), name='staff_list_create'),
    path('staff/<int:pk>/', StaffRetrieveUpdateDestroyView.as_view(),
         name='staff_detail'),

    # Guest views
    path('guests/', GuestListCreateView.as_view(), name='guest_list_create'),
    path('guests/<int:pk>/', GuestRetrieveUpdateDestroyView.as_view(),
         name='guest_detail'),
]
