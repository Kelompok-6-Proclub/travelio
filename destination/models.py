from django.db import models

# Create your models here.
class Destination(models.Model):
    place = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    city = models.TextField()
    description = models.TextField()

    def _str_(self):
        return self.title
