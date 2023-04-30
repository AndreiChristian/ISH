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
                       TestPropertyListView, TestPropertyDetailView, NewTestPropertyRetrieveUpdateDestroyView, NewTestPropertyListCreateView)

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


    # test for property serializers
    path('test_properties/', TestPropertyListView.as_view(), name='property-list'),
    path('test_properties/<int:pk>/', TestPropertyDetailView.as_view(),
         name='property-detail'),

    path('new_test_properties/', NewTestPropertyListCreateView.as_view(),
         name='property_list_create'),
    path('new_test_properties/<int:pk>/', NewTestPropertyRetrieveUpdateDestroyView.as_view(),
         name='property_retrieve_update_destroy'),
]
