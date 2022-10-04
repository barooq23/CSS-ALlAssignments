from django.db import models
from registration.models import *
# Create your models here.

class Post(models.Model):
    content= models.TextField()
    user=models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
class Comment(models.Model):
    content= models.TextField()
    user=models.ForeignKey(User, related_name="coments", on_delete=models.CASCADE)
    post=models.ForeignKey(Post, related_name="coments", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    