from django.urls import path
from . import views

urlpatterns = [
	path('Items/', views.ListCreateOrderAPIView.as_view(), name='home'),
    path('Items/<int:pk>/', views.UpdateOrderView.as_view(),name="update_order"),
    path('Items/<int:pk>/delete/', views.DestroyOrderView.as_view(),name="delete_items"),
]