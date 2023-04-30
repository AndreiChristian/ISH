from rest_framework import serializers
from api.models import Region

class RegionSerializer(serializers.ModelSerializer):

    properties = serializers.StringRelatedField(many=True)
    class Meta:
        model = Region
        fields = ['id', 'name', 'description','properties']
