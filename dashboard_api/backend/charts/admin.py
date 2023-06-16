from django.contrib import admin
from .models import Item

class ItemAdmin(admin.ModelAdmin):
    list_display = (('item_number', 'feature_name','feature_state','assigned_user','total_test_excuted','test_passed','test_failed')
)
admin.site.register(Item,ItemAdmin)


# Register your models here.
