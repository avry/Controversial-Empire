from django.db import models

# Create your models here.
class Project(models.Model):
	name = models.CharField(max_length=100)
	github = models.CharField(max_length=100)
	description = models.TextField(max_length=300)
	created_at = models.DateTimeField(auto_now_add=True)


	class Meta:
		ordering = ('created_at',)

	def __str__(self):
		return(self.name)
