"""from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    DestroyAPIView, UpdateAPIView)"""
from place.models import Place
from .serializers import PlaceSerializer
from rest_framework import viewsets

"""
class PlaceListView(ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class PlaceDetailView(RetrieveAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class PlaceCreateView(CreateAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class PlaceUpdateView(UpdateAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class PlaceDeleteView(DestroyAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
"""


class PlaceViewSet (viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()
