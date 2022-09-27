from multiprocessing import context
from django.shortcuts import render
from .models import *
# Create your views here.
def show1(request):
    context={
        'books': Book.objects.all(),
        'author': Author.objects.all()
    }
    return render(request, "show.html", context)