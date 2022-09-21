from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'Dojo.html')


def showresult(request):
    # name=request.POST['name']
    # location=request.POST['location']
    # language=request.POST['language']
    # comment=request.POST['comment']

    context={
        'name':request.POST['name'],
        'location':request.POST['location'],
        'language':request.POST['language'],
        'comment':request.POST['comment']
    }
    return render(request,'Survey.html',context)
