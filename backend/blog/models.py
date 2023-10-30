from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):

    title = models.CharField(max_length=75)
    blog = models.TextField(max_length=5000)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    picture = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title


class Comments(models.Model):
    comment = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
