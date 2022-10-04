from django.urls import path
from . import views

urlpatterns = [
    path('', views.create),
    path('/view', views.shows),
    path('/postcreate', views.postcreate),
    path('/comment', views.comment),
    path('/logout', views.logout)
]
