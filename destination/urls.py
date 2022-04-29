from django.urls import path
from . import views


urlpatterns = [
        path('', views.destList, name="destinations"),
        #path('detail/<str:pk>/', views.destDetail, name="detail"),
        path('create/', views.destCreate, name="create"),
        path('edit/<str:pk>', views.destUpdate, name="edit"),
        path('delete/<str:pk>', views.destDelete, name="delete"),
        ]
