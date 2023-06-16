from django.shortcuts import render
from rest_framework import serializers
from rest_framework import status
from .serializers import ItemSerializer
from .models import Item
from rest_framework.response import Response
from django.db import transaction, IntegrityError
from utils.exceptions import EMException
from django.shortcuts import render, get_object_or_404

from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView 
from rest_framework.generics import DestroyAPIView


class ListCreateOrderAPIView(CreateAPIView,ListAPIView):
    queryset = Item.objects.all()
    # permission_classes = [IsAuthenticated]
    serializer_class= ItemSerializer
    
    def post(self, request, *args, **kwargs):
        try:
            with transaction.atomic():
                return self.create(request,*args,**kwargs)

        except IntegrityError as e:
            raise EMException(detail=str(e))
        
        

class UpdateOrderView(RetrieveUpdateAPIView):
       
    queryset = Item.objects.all()
   
    serializer_class= ItemSerializer
    
   
    def put(request, pk):
        item = Item.objects.get(pk=pk)
        data = ItemSerializer(instance=item, data=request.data)
        if data.is_valid():
            data.save()
            return Response(data.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

class DestroyOrderView(DestroyAPIView):
    
       queryset = Item.objects.all()
       
       serializer_class= ItemSerializer
       
       def delete_items(request, pk):
            item = get_object_or_404(Item, pk=pk)
            item.delete()
            return Response(status=status.HTTP_202_ACCEPTED)

