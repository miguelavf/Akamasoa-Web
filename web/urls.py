from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("Qs", views.qs, name="qs"),
    path("2022", views.twentytwo, name="2022"),
    path("2023", views.twentythree, name="2023"),
    path("2024", views.twentyfour, name="2024"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)