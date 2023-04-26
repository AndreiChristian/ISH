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

