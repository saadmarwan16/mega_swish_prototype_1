from rest_framework import serializers

from swish.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        field = ("id", "title", "description")
