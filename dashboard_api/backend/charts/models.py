from django.db import models

class Item(models.Model):
    item_number = models.CharField(max_length=255)
    feature_name= models.CharField(max_length=255)
    feature_state = models.CharField(max_length=255)
    assigned_user = models.CharField(max_length=255)
    total_test_excuted = models.IntegerField()
    test_passed = models.IntegerField()
    test_failed = models.IntegerField()
    def __str__(self) -> str:
        return self.feature_name


