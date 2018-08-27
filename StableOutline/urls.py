from django.urls import path
from StableOutline.api import views



urlpatterns = [
    path('lead/', views.LeadListCreate.as_view() ),
]