import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock des variables d'environnement
vi.mock('../lib/stripe', () => ({
  stripe: {
    redirectToCheckout: vi.fn(),
  },
  createCheckoutSession: vi.fn(),
}));

// Mock de react-router-dom
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
  Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
}));

// Mock du contexte d'authentification
vi.mock('../components/auth/AuthContext', () => ({
  useAuthContext: () => ({
    user: null,
    loading: false,
  }),
}));