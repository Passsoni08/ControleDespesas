import { apiRequest } from '@/lib/api/client';

export type Despesa = {
  id: number;
  categoria: number;
  categoria_nome: string;
  data: string;
  descricao: string;
  valor: string;
  criado_em: string;
  atualizado_em: string;
};

export type DespesaPayload = {
  categoria: number;
  data: string;
  descricao: string;
  valor: string;
};

export type DespesasFilters = {
  categoria?: number;
  data?: string;
  valor?: string;
  ordering?: string;
};

function toQueryString(filters: DespesasFilters = {}): string {
  const params = new URLSearchParams();

  if (filters.categoria) params.set('categoria', String(filters.categoria));
  if (filters.data) params.set('data', filters.data);
  if (filters.valor) params.set('valor', filters.valor);
  if (filters.ordering) params.set('ordering', filters.ordering);

  const query = params.toString();
  return query ? `?${query}` : '';
}

export async function listDespesas(token: string, filters?: DespesasFilters): Promise<Despesa[]> {
  return apiRequest<Despesa[]>(`/api/despesas/${toQueryString(filters)}`, { token });
}

export async function getDespesa(token: string, id: number): Promise<Despesa> {
  return apiRequest<Despesa>(`/api/despesas/${id}/`, { token });
}

export async function createDespesa(token: string, payload: DespesaPayload): Promise<Despesa> {
  return apiRequest<Despesa>('/api/despesas/', {
    method: 'POST',
    token,
    body: payload,
  });
}

export async function updateDespesa(
  token: string,
  id: number,
  payload: Partial<DespesaPayload>,
): Promise<Despesa> {
  return apiRequest<Despesa>(`/api/despesas/${id}/`, {
    method: 'PATCH',
    token,
    body: payload,
  });
}

export async function deleteDespesa(token: string, id: number): Promise<void> {
  await apiRequest<null>(`/api/despesas/${id}/`, {
    method: 'DELETE',
    token,
  });
}