from rest_framework import serializers
from reply.models import Reply


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ('id','to','tname', 'body')
