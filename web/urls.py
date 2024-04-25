from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("Qs", views.qs, name="qs"),
]