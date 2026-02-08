from rest_framework import serializers

from despesas.models import Categoria, Despesa


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nome', 'criado_em']
        read_only_fields = ['id', 'criado_em']


class DespesaSerializer(serializers.ModelSerializer):
    categoria_nome = serializers.CharField(source='categoria.nome', read_only=True)

    class Meta:
        model = Despesa
        fields = [
            'id',
            'categoria',
            'categoria_nome',
            'data',
            'descricao',
            'valor',
            'criado_em',
            'atualizado_em',
        ]
        read_only_fields = ['id', 'criado_em', 'atualizado_em']
