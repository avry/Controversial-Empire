from django.db import models

# Create your models here.
class Person(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	message = models.CharField(max_length=300)
	created_at = models.DateTimeField(auto_now_add=True)


	class Meta:
		ordering = ('created_at',)

	def __str__(self):
		return(self.name)
