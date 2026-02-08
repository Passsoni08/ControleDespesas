from django.urls import include, path
from rest_framework.routers import DefaultRouter

from despesas.views import CategoriaViewSet, DespesaViewSet

router = DefaultRouter()
router.register('categorias', CategoriaViewSet, basename='categoria')
router.register('despesas', DespesaViewSet, basename='despesa')

urlpatterns = [
    path('', include(router.urls)),
]
