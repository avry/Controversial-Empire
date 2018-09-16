from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import generics
from .serializers import ProjectSerializer
from projects.models import Project

def google(request):
    html = "google-site-verification: googlee928d1f5ff907fe2.html" 
    return HttpResponse(html)


class ProjectListRetrieve(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectRetrieve(generics.ListCreateAPIView):
	serializer_class = ProjectSerializer

	def get_queryset(self):
		"""
		This view should return a project when the user clicks on 
		the corresponding button on the ProjectListView.
		"""
		slug = self.kwargs['slug']

		return Project.objects.filter(slug=slug)