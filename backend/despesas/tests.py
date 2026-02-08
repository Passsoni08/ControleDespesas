from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from despesas.models import Categoria, Despesa


class DespesaApiTests(APITestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(username='tester', password='testpass123')
        self.client.force_authenticate(self.user)

    def test_criar_categoria(self):
        url = reverse('categoria-list')
        response = self.client.post(url, {'nome': 'Transporte'}, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Categoria.objects.filter(nome='Transporte').exists())

    def test_criar_despesa(self):
        categoria = Categoria.objects.create(nome='Alimentacao')
        url = reverse('despesa-list')
        payload = {
            'categoria': categoria.id,
            'data': '2026-02-07',
            'descricao': 'Onibus',
            'valor': '7.50',
        }

        response = self.client.post(url, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Despesa.objects.count(), 1)
        despesa = Despesa.objects.first()
        self.assertEqual(despesa.usuario, self.user)

    def test_filtrar_despesas_por_categoria(self):
        categoria_1 = Categoria.objects.create(nome='Alimentacao')
        categoria_2 = Categoria.objects.create(nome='Saude')
        Despesa.objects.create(
            usuario=self.user,
            categoria=categoria_1,
            data='2026-02-07',
            descricao='Cafe',
            valor='5.00',
        )
        Despesa.objects.create(
            usuario=self.user,
            categoria=categoria_2,
            data='2026-02-08',
            descricao='Consulta',
            valor='200.00',
        )

        url = reverse('despesa-list')
        response = self.client.get(url, {'categoria': categoria_1.id})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['categoria'], categoria_1.id)
