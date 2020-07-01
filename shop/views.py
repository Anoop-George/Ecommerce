from django.shortcuts import render
from rest_framework.views import APIView
from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework import generics

class ProductList(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset=Product.objects.all()
  