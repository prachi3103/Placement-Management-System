from students.api.views import StudentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'',StudentViewSet, base_name='students')
urlpatterns = router.urls