import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

/**
 * Custom hook for accessing the Todo context.
 * It ensures the hook is used within a component wrapped by TodoProvider.
 */
export const useTodos = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }

  return context;
};