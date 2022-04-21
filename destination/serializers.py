from rest_framework import serializers
from .models import Destination

class DestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Destination
        fields = ('id', 'place', 'image', 'created_at', 'updated_at', 'city', 'description')
