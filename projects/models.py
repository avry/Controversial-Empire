from django.db import models
from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify
import random
import string

# Create your models here.
class Project(models.Model):
	name = models.CharField(max_length=100)
	github = models.CharField(max_length=100)
	description = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	slug = models.SlugField(null=True, blank=True)


	class Meta:
		ordering = ('created_at',)

	def __str__(self):
		return(self.name)



#slug generation
DONT_USE = ['create']
def random_string_generator(size=10, chars=string.ascii_lowercase + string.digits):
	return ''.join(random.choice(chars) for _ in range(size))
def unique_slug_generator(instance, new_slug=None):
	"""
	This is for a Django project and assues your instance
	has a model with a slug field and a title char field
	"""
	if new_slug is not None:
		slug = new_slug
	else:
		slug = slugify(instance.name)
	if slug in DONT_USE:
		new_slug = "{slug}-{randstr}".format(
				slug=slug,
				randstr=random_string_generator(size=4)
			)
		return unique_slug_generator(instance, new_slug=new_slug)
	Klass = instance.__class__
	qs_exists = Klass.objects.filter(slug=slug).exists()
	if qs_exists:
		new_slug = "{slug}-{randstr}".format(
				slug=slug,
				randstr=random_string_generator(size=4)
			)
		return unique_slug_generator(instance, new_slug=new_slug)
	return slug






def rl_pre_save_receiver(sender, instance, *args, **kwargs):
	print('saving...')
	print(instance.created_at)
	if not instance.slug:
		instance.slug = unique_slug_generator(instance)




pre_save.connect(rl_pre_save_receiver, sender=Project)



