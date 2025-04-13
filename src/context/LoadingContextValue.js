import { createContext } from 'react';

/**
 * Context for managing loading state across the application
 */
export const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
});
