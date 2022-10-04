from django.shortcuts import render,redirect
from .models import *
from registration.models import *

# Create your views here.
def create(request):
    return render(request, 'post.html')


def shows(request):
    context ={
        'allpost':Post.objects.all(),
        'allcomment':Comment.objects.all()
    }
    return render(request, 'viewPost.html',context)


def postcreate(request):
    user_id = int(request.session['user_id'])
    Post.objects.create(content=request.POST['post'],user=User.objects.get(id=user_id))
    return redirect('/wall/view')


def comment(request):
    user_id=int(request.session['user_id'])
    msg_id=request.POST['hide']
    Comment.objects.create(
        content=request.POST['coment'],
        user=User.objects.get(id=user_id),
        post=Post.objects.get(id=msg_id),
        
    )
    return redirect('/wall/view')


def logout(request):
    del request.session['user_id']
    return redirect('/')