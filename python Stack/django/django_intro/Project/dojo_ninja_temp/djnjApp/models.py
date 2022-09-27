from django.db import models


class Dojo(models.Model):
    name = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    state = models.CharField(max_length=2)
    desc = models.CharField(max_length=55, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Ninja(models.Model):
    dojo = models.ForeignKey(Dojo, related_name="ninjas", on_delete = models.CASCADE)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)