from django.db import models
from django.contrib.auth.models import User

class Blog(models.Model):

    title = models.CharField(max_length=75)
    blog = models.CharField(max_length=5000)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    # picture = models.ImageField()

    def __str__(self):
        return self.title