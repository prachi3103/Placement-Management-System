from rest_framework.routers import DefaultRouter
from place.api.views import PlaceViewSet
"""from django.urls import path
from .views import (PlaceListView, PlaceDetailView,
                    PlaceCreateView, PlaceDeleteView, PlaceUpdateView)

urlpatterns = [
    path('', PlaceListView.as_view()),
    path('create/', PlaceCreateView.as_view()),
    path('<pk>', PlaceDetailView.as_view()),
    path('<pk>/update/', PlaceUpdateView.as_view()),
    path('<pk>/delete/', PlaceDeleteView.as_view())
]
"""

router = DefaultRouter()
router.register(r'', PlaceViewSet, base_name='place')
urlpatterns = router.urls
