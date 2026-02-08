from django.contrib import admin

from despesas.models import Categoria, Despesa


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'criado_em')
    search_fields = ('nome',)


@admin.register(Despesa)
class DespesaAdmin(admin.ModelAdmin):
    list_display = ('descricao', 'valor', 'data', 'categoria', 'usuario')
    list_filter = ('categoria', 'data')
    search_fields = ('descricao',)
