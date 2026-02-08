from rest_framework import permissions, viewsets

from despesas.models import Categoria, Despesa
from despesas.serializers import CategoriaSerializer, DespesaSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Categoria.objects.all().order_by('nome')


class DespesaViewSet(viewsets.ModelViewSet):
    serializer_class = DespesaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Despesa.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)
