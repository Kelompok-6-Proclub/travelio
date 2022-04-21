from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DestSerializer
from .models import Destination

# Create your views here.

class DestViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all().order_by('id')
    serializer_class = DestSerializer
