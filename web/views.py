from django.shortcuts import render
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
# Create your views here.


def index(request):
    return render(request, "web/index.html")


def qs(request):
    return render(request, "web/qs.html")

def twentytwo(request):
    return render(request, "web/2022.html")

def twentythree(request):
    return render(request, "web/2023.html")

def twentyfour(request):
    return render(request, "web/2024.html")