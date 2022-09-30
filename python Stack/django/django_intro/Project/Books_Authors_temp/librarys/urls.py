from django.urls import path
from . import views
urlpatterns = [
    path('', views.book),
    path('addbook', views.addbook),
    path('books/<int:id>', views.viewbook),
    path('authtobook/<int:id>', views.authtobook),
    path('auth', views.auther),
    path('addauther', views.addauther),
    path('authers/<int:id>', views.viewaouthe),
    path('bookauth/<int:id>',views.addauth),
]
