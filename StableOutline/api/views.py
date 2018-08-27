from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import generics
from .serializers import LeadSerializer
from StableOutline.models import Person

def google(request):
    html = "google-site-verification: googlee928d1f5ff907fe2.html" 
    return HttpResponse(html)


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = LeadSerializer