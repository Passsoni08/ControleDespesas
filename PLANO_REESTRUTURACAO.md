# Plano de reestruturação (Django + Next.js + shadcn)

## Fase 1 — Escopo inicial definido
- **Funcionalidades v1**
  - Autenticação (login/logout com JWT).
  - CRUD de despesas.
  - CRUD de categorias.
  - Filtro básico por data, categoria e valor.
- **Entidades principais**
  - Usuário (modelo padrão do Django).
  - Categoria.
  - Despesa (data, descrição, valor, categoria e usuário).

## Fase 2 — Decisões de arquitetura
- **Backend**
  - Django + Django REST Framework.
  - Autenticação JWT (simplejwt).
  - Banco SQLite no desenvolvimento.
  - CORS liberado para `http://localhost:3000`.
- **Frontend**
  - Next.js (App Router).
  - shadcn/ui + Tailwind CSS.
  - React Hook Form + Zod para validação.

## Fase 3 — Início do backend (estado atual)
- **Estrutura criada**
  - Projeto Django em `backend/` com app `despesas`.
  - Modelos `Categoria` e `Despesa`.
  - Endpoints REST com `ModelViewSet` para categorias e despesas.
  - Rotas de autenticação JWT (`/api/token/` e `/api/token/refresh/`).
- **Próximos passos recomendados**
  - Rodar migrações.
  - Criar superusuário.
  - Subir o servidor.

### Comandos úteis
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python backend/manage.py migrate
python backend/manage.py createsuperuser
python backend/manage.py runserver
