from django.db import models

# Create your models here.
class Person(models.Model):
	name = models.TextField()
	description = models.TextField()
	created = models.DateTimeField(auto_now_add=True)


	class Meta:
		ordering = ('created',)
