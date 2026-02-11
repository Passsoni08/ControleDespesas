import { apiRequest } from '@/lib/api/client';

export type TokenPair = {
  access: string;
  refresh: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export async function login(payload: LoginPayload): Promise<TokenPair> {
  return apiRequest<TokenPair>('/api/token/', {
    method: 'POST',
    body: payload,
  });
}

export async function refreshToken(refresh: string): Promise<{ access: string }> {
  return apiRequest<{ access: string }>('/api/token/refresh/', {
    method: 'POST',
    body: { refresh },
  });
}