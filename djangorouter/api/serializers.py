from rest_framework import serializers
from StableOutline.models import Person

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name', 'email', 'message')
