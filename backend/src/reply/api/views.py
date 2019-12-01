from reply.models import Reply
from reply.api.serializers import ReplySerializer
from rest_framework import viewsets

class ReplyViewSet (viewsets.ModelViewSet):
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()