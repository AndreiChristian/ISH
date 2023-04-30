from rest_framework import generics
from api.models import Property
from api.serializers import TestPropertySerializer, TestPropertyCreateUpdateSerializer, TestPropertyReadSerializer


class TestPropertyListView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = TestPropertySerializer


class TestPropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = TestPropertySerializer


class NewTestPropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = TestPropertySerializer

    def get_serializer_class(self):
        if self.request.method in ['POST', 'PUT', 'PATCH']:
            return TestPropertyCreateUpdateSerializer
        return TestPropertySerializer


class NewTestPropertyRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = TestPropertyReadSerializer

    def get_serializer_class(self):
        if self.request.method in ['POST', 'PUT', 'PATCH']:
            return TestPropertyCreateUpdateSerializer
        return TestPropertyReadSerializer
