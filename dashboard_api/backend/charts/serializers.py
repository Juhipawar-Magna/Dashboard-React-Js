from django.db.models import fields
from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
	class Meta:
		model = Item
		fields = ('id','item_number', 'feature_name','feature_state','assigned_user','total_test_excuted','test_passed','test_failed')

