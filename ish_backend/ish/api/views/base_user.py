from rest_framework import generics
from django.contrib.auth.models import User
from api.models import Department, GeneralManager, RegionalManager, PropertyManager, Staff, Guest
from api.serializers import (UserSerializer, DepartmentSerializer, GeneralManagerSerializer,
                             RegionalManagerSerializer, PropertyManagerSerializer, StaffSerializer, GuestSerializer)

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class GeneralManagerListCreateView(generics.ListCreateAPIView):
    queryset = GeneralManager.objects.all()
    serializer_class = GeneralManagerSerializer

class GeneralManagerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = GeneralManager.objects.all()
    serializer_class = GeneralManagerSerializer

class RegionalManagerListCreateView(generics.ListCreateAPIView):
    queryset = RegionalManager.objects.all()
    serializer_class = RegionalManagerSerializer

class RegionalManagerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RegionalManager.objects.all()
    serializer_class = RegionalManagerSerializer

class PropertyManagerListCreateView(generics.ListCreateAPIView):
    queryset = PropertyManager.objects.all()
    serializer_class = PropertyManagerSerializer

class PropertyManagerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PropertyManager.objects.all()
    serializer_class = PropertyManagerSerializer

class StaffListCreateView(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class StaffRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class GuestListCreateView(generics.ListCreateAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class GuestRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
