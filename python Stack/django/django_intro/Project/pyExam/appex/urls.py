from django.urls import path
from . import views
from .models import *

urlpatterns = [
    path('', views.show),
    path('reg', views.reg),
    path('login', views.login),
    path('logout', views.logout),
    path('plant/new', views.plant),
    path('dashboard', views.dashboard),
    path('createplant', views.createplant),
    path('showp/<int:id>', views.showp),
    path('update/<int:id>', views.update),
    path('mytree', views.mytree),
    path('delete/<int:id>',views.delete),
    path('edit/<int:id>', views.edit),

]
