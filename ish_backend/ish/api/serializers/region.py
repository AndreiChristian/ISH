from rest_framework import serializers
from api.models import Region

class RegionSerializer(serializers.ModelSerializer):

    properties = serializers.StringRelatedField(many=True)
    staff_members = serializers.StringRelatedField(many=True)
    managers = serializers.StringRelatedField(many=True)
    class Meta:
        model = Region
        fields = ['id', 'name', 'description','properties','staff_members','managers']
