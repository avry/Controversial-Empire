from django.urls import path
from StableOutline.api import views



urlpatterns = [
    path('projectslist/', views.LeadListCreate.as_view() ),
]