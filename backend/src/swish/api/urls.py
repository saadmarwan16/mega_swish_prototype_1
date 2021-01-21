from django.urls import path

from .views import ProductListView, ProductDetailView

urlpatterns = [
    path('', ProductListView),
    path('<pk>', ProductDetailView),
]
