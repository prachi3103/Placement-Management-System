from django.db import models

class Questions(models.Model):
    CAT_CHOICES = (
        ('algorithms','Data structure and Algorithms'),
        ('dm','Data Warehousing and Mining'),
        ('ai','Artificial Intelligence'),
        ('ml','Machine Learning'),
        ('database','Database Management'),
        ('net','Communications and Networks'),
        ('hardware','Computer Hardware'),
        ('generalknowledge','General Knowledge'),
        ('bf','Business and Finance'),
        ('cg','Computer graphics and Image Processing'),
        ('cry','Cryptography'),
        ('cs','Cyber-Security'),
        ('cad','Computer Aided Design'),
        ('os','Operating System'),
        ('sp','Signal Processing'),
        ('rob','Robotics'),
        ('www','World Wide Web')
    )
    question = models.CharField(max_length = 250)
    optiona = models.CharField(max_length = 100)
    optionb = models.CharField(max_length = 100)
    optionc = models.CharField(max_length = 100)
    optiond = models.CharField(max_length = 100)
    answer = models.CharField(max_length = 100)
    catagory = models.CharField(max_length=20, choices = CAT_CHOICES)
    

    class Meta:
        ordering = ('-catagory',)

    def __str__(self):
        return self.question