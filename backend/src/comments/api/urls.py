from rest_framework.routers import DefaultRouter
from comments.api.views import CommentViewSet

router = DefaultRouter()
router.register(r'', CommentViewSet, base_name='comments')
urlpatterns = router.urls