from django.shortcuts import render, redirect
from .models import *

# Create your views here.
def method1(request):
    context={
        'dojos': Dojo.objects.all()
    }
    return render(request, 'djnj.html', context)


def newdojo(request):
    Dojo.objects.create(name=request.POST['Name'], city=request.POST['City'], state=request.POST['State'])
    return redirect('/form')


def newnninja(request):
    dojo1=Dojo.objects.get(id=request.POST['select'])
    Ninja.objects.create(dojo=dojo1, first_name=request.POST['first_name'],  last_name=request.POST['last_name'])
    return redirect('/form')
    
