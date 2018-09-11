from rest_framework import serializers
from djangorouter.models import Project

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'github', 'description', 'created_at')
