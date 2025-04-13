import { useContext } from 'react';
import { LoadingContext } from '../context/LoadingContextValue';

/**
 * Custom hook to access the loading state and functions
 * @returns {Object} The loading context
 */
export const useLoading = () => useContext(LoadingContext);
