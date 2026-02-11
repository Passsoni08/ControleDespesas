import { apiRequest } from '@/lib/api/client';

export type Categoria = {
  id: number;
  nome: string;
  criado_em: string;
};

export type CategoriaPayload = {
  nome: string;
};

export async function listCategorias(token: string): Promise<Categoria[]> {
  return apiRequest<Categoria[]>('/api/categorias/', { token });
}

export async function createCategoria(token: string, payload: CategoriaPayload): Promise<Categoria> {
  return apiRequest<Categoria>('/api/categorias/', {
    method: 'POST',
    token,
    body: payload,
  });
}

export async function updateCategoria(
  token: string,
  id: number,
  payload: Partial<CategoriaPayload>,
): Promise<Categoria> {
  return apiRequest<Categoria>(`/api/categorias/${id}/`, {
    method: 'PATCH',
    token,
    body: payload,
  });
}

export async function deleteCategoria(token: string, id: number): Promise<void> {
  await apiRequest<null>(`/api/categorias/${id}/`, {
    method: 'DELETE',
    token,
  });
}