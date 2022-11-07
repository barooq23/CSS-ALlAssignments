from django.db import models
import re
import datetime
# Create your models here.


class UserManger(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['name']) < 5:
            errors["name"] = "User name should be at least 5 characters"
        if len(postData['password']) < 5:
            errors["password"] = "Password should be at least 5 characters"
        if postData['cpassword'] != postData['password']:
            errors["cpassword"] = "The password not match"
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"

        return errors


class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManger()


class ArbortraryManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['species']) < 5:
            errors["species"] = "Species should be at least 5 characters"
        if len(postData["location"]) < 2:
            errors["location"] = "Location should be at least 2 characters"
        if len(postData['reason']) < 10:
            errors["reason"] = "Reason should be at least 10 characters"
        if postData["relasedate"] > str(datetime.date.today()) :
            errors['faliddate'] = "The Date must be in the past"
            
        return errors


class Arbortrary(models.Model):
    species = models.CharField(max_length=240)
    location = models.CharField(max_length=255)
    relasedate=models.DateField(blank=True, null=True)
    reason = models.CharField(max_length=255)
    arbot = models.ForeignKey(User, related_name="arbortrary", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=ArbortraryManager()