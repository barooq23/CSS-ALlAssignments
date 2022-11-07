from django.shortcuts import render, redirect
import bcrypt
from .models import *
from django.contrib import messages
# Create your views here.


def show(request):
    return render(request, 'login.html')


def dashboard(request):
    context = {
        "dashboard": Arbortrary.objects.all()
    }
    return render(request, 'allArbo.html', context)


def mytree(request):
    user = User.objects.get(id=request.session['user_id'])
    plant = Arbortrary.objects.all()
    context = {
        'allplant': plant,
        'user':user
    }
    return render(request, 'mytree.html',context)


def edit(request,id):
    user = User.objects.get(id=request.session['user_id'])
    plant = Arbortrary.objects.get(id=id)
    context = {
        'plant': plant,
        'user': user
    }
    return render(request, 'update.html', context)

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
    return redirect("/dashboard")  # never render on a post, always redirect!


def login(request):

    user = User.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_id'] = logged_user.id
            request.session['user_name'] = logged_user.name
            return redirect('/dashboard')
    return redirect("/")


def logout(request):
    del request.session['user_id']
    del request.session['user_name']
    return redirect('/')


def plant(request):
    return render(request, 'main.html')


def createplant(request):
    errors = Arbortrary.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/plant/new')
    user = User.objects.get(id=request.session['user_id'])                                                                                                                                                                                                                                                          
    Arbortrary.objects.create(
        species=request.POST['species'],
        location=request.POST['location'],
        relasedate=request.POST['relasedate'],
        reason=request.POST['reason'],
        arbot=user
                              )
    aa = Arbortrary.objects.last()

    return redirect('/dashboard')


def showp(request, id):
    context = {
        "arbo": Arbortrary.objects.get(id=id)
    }
    return render(request, 'showp.html', context)


def delete(request, id):
    arbo1 = Arbortrary.objects.get(id=id)
    arbo1.delete()
    return redirect("/mytree")


def update(request, id):
    errors = Arbortrary.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for k, v in errors.items():
            messages.error(request, v)
        return redirect('/edit/'+str(id))
    erbos = Arbortrary.objects.get(id=id)
    erbos.species = request.POST['species']
    erbos.location = request.POST['location']
    erbos.relasedate = request.POST['relasedate']
    erbos.reason = request.POST['reason']
    erbos.save()
    return redirect("/dashboard")
