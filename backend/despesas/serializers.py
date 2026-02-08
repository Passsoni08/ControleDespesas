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

    def validate_valor(self, value):
        if value <= 0:
            raise serializers.ValidationError('O valor deve ser maior que zero.')
        return value

    def validate_descricao(self, value):
        cleaned = value.strip()
        if not cleaned:
            raise serializers.ValidationError('A descrição é obrigatória.')
        return cleaned
