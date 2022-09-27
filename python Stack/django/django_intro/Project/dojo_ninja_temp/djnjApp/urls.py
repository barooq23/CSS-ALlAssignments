from django.urls import path 
from . import views

urlpatterns = [
    path('form',views.method1),
    path('addDojo', views.newdojo),
    path('addNinja', views.newnninja),
]
