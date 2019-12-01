from django.db import models

# Create your models here.
class Reply(models.Model):
    tname = models.CharField(max_length=100,blank=True)
    body = models.TextField(blank=True)
    to = models.CharField(max_length=100,blank=True)

    def __str__(Self):
        return self.tname