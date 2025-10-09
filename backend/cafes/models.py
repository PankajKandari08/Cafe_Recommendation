from django.db import models
import json

class Cafe(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    location = models.CharField(max_length=255)  # Human-readable address
    rating = models.FloatField(default=0.0)
    price = models.IntegerField(help_text="Average price per person")
    dishes = models.JSONField(default=list, help_text="List of dishes available")
    image_url = models.URLField(blank=True, null=True)
    contact = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-rating']

    def __str__(self):
        return f"{self.name} - {self.location}"

    def get_dishes_string(self):
        """Return dishes as a space-separated string for TF-IDF"""
        if isinstance(self.dishes, list):
            return ' '.join(self.dishes)
        return ''