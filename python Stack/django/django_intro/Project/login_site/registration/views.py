from django.shortcuts import render, redirect
import bcrypt
from .models import *
from django.contrib import messages
# Create your views here.


def show(request):
    return render(request, 'login.html')


def succes(request):
    return render(request, 'main.html')


def reg(request):
    errors = User.objects.basic_validator(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/')
    # include some logic to validate user input before adding them to the database!
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    print(pw_hash)
    User.objects.create(
        name=request.POST['name'], email=request.POST['email'], password=pw_hash)
    user1 = User.objects.last()
    request.session['user_name'] = user1.name
    request.session['user_id'] = user1.id
    return redirect("/succes")  # never render on a post, always redirect!


def login(request):

    user = User.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_id'] = logged_user.id
            request.session['user_name'] = logged_user.name
            return redirect('/succes')
    return redirect("/")


def logout(request):
    del request.session['user_id']
    del request.session['user_name']
    return redirect('/')
