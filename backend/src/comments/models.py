from django.db import models
from students.models import Student
# Create your models here.
class Comment(models.Model):
    sname = models.CharField(max_length=100,blank=True)
    content = models.TextField(blank=True)

    

    def __str__(Self):
        return self.sname