from django.urls import path
from . import views

urlpatterns = [
    path('facility_categories/', views.FacilityCategoryListCreateView.as_view(), name='facility_categories_list_create'),
    path('facility_categories/<int:pk>/', views.FacilityCategoryDetailView.as_view(), name='facility_categories_detail'),
    path('facility_subcategories/', views.FacilitySubCategoryListCreateView.as_view(), name='facility_subcategories_list_create'),
    path('facility_subcategories/<int:pk>/', views.FacilitySubCategoryDetailView.as_view(), name='facility_subcategories_detail'),
    path('facility_items/', views.FacilityItemListCreateView.as_view(), name='facility_items_list_create'),
    path('facility_items/<int:pk>/', views.FacilityItemDetailView.as_view(), name='facility_items_detail'),
]
