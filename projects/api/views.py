from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import generics
from .serializers import LeadSerializer
from projects.models import Project

def google(request):
    html = "google-site-verification: googlee928d1f5ff907fe2.html" 
    return HttpResponse(html)


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = LeadSerializer