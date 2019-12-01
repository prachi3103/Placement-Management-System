from rest_framework.routers import DefaultRouter
from reply.api.views import ReplyViewSet

router = DefaultRouter()
router.register(r'', ReplyViewSet, base_name='reply')
urlpatterns = router.urls