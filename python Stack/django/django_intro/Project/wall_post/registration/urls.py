from django.urls import path
from . import views

urlpatterns = [
    path('', views.show),
    path('reg',views.reg),
    path('succes', views.succes),
    path('login',views.login),
    path('logout',views.logout),
]

