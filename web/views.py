from django.shortcuts import render
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
# Create your views here.


def index(request):
    return render(request, "web/index.html")


def qs(request):
    return render(request, "web/qs.html")