# from django.urls import path

# from .views import ProductListView, ProductDetailView

# urlpatterns = [
#     path('', ProductListView),
#     path('<pk>', ProductDetailView),
# ]

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),

    path('get-products', views.get_products, name="get_products"),
]
