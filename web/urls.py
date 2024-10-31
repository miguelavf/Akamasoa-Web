from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("Qs", views.qs, name="qs"),
    path("2022", views.twentytwo, name="2022"),
    path("2023", views.twentythree, name="2023"),
    path("2024", views.twentyfour, name="2024"),
]