from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255, blank=False)
    emailid = models.EmailField(max_length=50, null=False)
    sapid = models.CharField(max_length=15,primary_key=True)
    department = models.CharField(max_length=100)
    contactno = models.CharField(max_length=10, default=0000)
    year = models.CharField(max_length=50)

    def __str__(self):
        return self.name
# Create your models here.
