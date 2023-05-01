from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Department, GeneralManager, RegionalManager, PropertyManager, Staff, Guest, Region, Property
from api.serializers import PropertySerializer, RegionSerializer
from django.contrib.auth import authenticate


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',
                  'first_name', 'password', 'last_name')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class GeneralManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = GeneralManager
        fields = ('id', 'user')


class RegionalManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    region = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = RegionalManager
        fields = ('id', 'user', 'region')


class PropertyManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    region = serializers.StringRelatedField(read_only=True)
    property = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = PropertyManager
        fields = ('id', 'user', 'region', 'property')


class StaffSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    region = serializers.StringRelatedField(read_only=True)
    department = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Staff
        fields = ('id', 'user', 'region', 'department')


class GuestSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Guest
        fields = ('id', 'user')
