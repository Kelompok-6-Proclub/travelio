from django.db import models

# Create your models here.
class Destination(models.Model):
    place = models.CharField(max_length=180)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)
    city = models.CharField(max_length=180)
    description = models.TextField()

    def __str__(self):
        return self.place
