from django.urls import path
from djangorouter.api import views



urlpatterns = [
    path('projectslist/', views.LeadListCreate.as_view() ),
]