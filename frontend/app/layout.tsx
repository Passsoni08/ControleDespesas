import './global.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Controle de Despesas',
  description: 'Frontend do Controle de Despesas',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
