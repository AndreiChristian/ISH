from rest_framework import generics
from api.models import Property
from api.serializers import TestPropertySerializer

class TestPropertyListView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = TestPropertySerializer

class TestPropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = TestPropertySerializer
