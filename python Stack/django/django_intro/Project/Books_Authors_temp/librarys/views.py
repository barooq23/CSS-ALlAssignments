from multiprocessing import context
from turtle import title
from django.shortcuts import render, redirect
from .models import *
# Create your views here.
def book(request):
    context={
        'books':Book.objects.all()
    }
    return render (request, 'book.html', context)
def addbook(requset):
    Book.objects.create(title=requset.POST['title'])
    return redirect('/')
def viewbook(request, id):
    context={
        'book': Book.objects.get(id=int(id)),
        'allauthor': Author.objects.all()
    }
    return render(request, 'information.html', context)


def authtobook(request, id):
    book1= Book.objects.get(id=int(id))
    pub1 = Author.objects.get(id=request.POST['authtobook'])
    book1.author.add(pub1)
    return redirect ('/books/'+str(id))
