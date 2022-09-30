from multiprocessing import context
from django.shortcuts import render, redirect
from .models import *
# Create your views here.


def book(request):
    context = {
        'books': Book.objects.all()
    }
    return render(request, 'book.html', context)


def addbook(requset):
    Book.objects.create(title=requset.POST['title'])
    return redirect('/')


def authtobook(request, id):
    book1 = Book.objects.get(id=int(id))
    pub1 = Author.objects.get(id=request.POST['authtobook'])
    book1.authors.add(pub1)
    return redirect(f'/books/{book1.id}')


def auther(request):
    context = {
        'authers': Author.objects.all()
    }
    return render(request, 'author.html', context)


def addauther(request):
    Author.objects.create(
        first_name=request.POST['first_name'], last_name=request.POST['last_name'])
    return redirect('/auth')


def viewaouthe(request, id):
    context = {
        'auth': Author.objects.get(id=int(id)),
        'allbook': Book.objects.all()
    }
    return render(request, 'authinfo.html', context)


def viewbook(request, id):
    context = {
        'book': Book.objects.get(id=int(id)),
        'allauthor': Author.objects.all()
    }
    return render(request, 'information.html', context)


def addauth(request,id):
    auth1 = Author.objects.get(id=int(id))
    book1 = Book.objects.get(id=request.POST['authtobook'])
    auth1.books.add(book1)
    return redirect(f'/authers/{auth1.id}')
