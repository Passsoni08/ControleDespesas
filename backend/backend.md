# Backend (Django)

## Visão geral
O backend usa Django + Django REST Framework com autenticação JWT e CORS configuráveis via variáveis de ambiente.

## Pré-requisitos
- Python 3.10+
- Virtualenv (opcional, recomendado)

## Setup rápido
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto (ao lado do `requirements.txt`) com base em `.env.example`:

```bash
cp .env.example .env
```

> Observação: o backend lê as variáveis via ambiente. Se quiser carregá-las automaticamente, use seu método preferido
> (`direnv`, `dotenv`, export manual etc.).

## Migrações
```bash
python backend/manage.py makemigrations
python backend/manage.py migrate
```

## Criar superusuário
```bash
python backend/manage.py createsuperuser
```

## Rodar o servidor
```bash
python backend/manage.py runserver
```

## Endpoints principais
- `POST /api/token/` (JWT login)
- `POST /api/token/refresh/`
- `GET/POST /api/categorias/`
- `GET/POST /api/despesas/`

### Filtros e ordenação
- `GET /api/categorias/?nome=Alimentação`
- `GET /api/despesas/?categoria=<id>`
- `GET /api/despesas/?data=2026-02-07`
- `GET /api/despesas/?ordering=-data`

## Testes
```bash
python backend/manage.py test
```
