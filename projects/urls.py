from django.urls import path
from projects.api import views



urlpatterns = [
    path('projectslist/', views.ProjectListRetrieve.as_view() ),
    # path('projectslist/', views.LeadListCreate.as_view() )
]