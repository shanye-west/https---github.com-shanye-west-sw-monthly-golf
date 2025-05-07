import { createContext, useContext, ReactNode } from 'react';
import { useToast } from './use-toast';
import { Toaster } from './toast';

interface ToastContextType {
  toast: (props: { title: string; description?: string; type?: 'default' | 'success' | 'error' | 'warning'; duration?: number }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const { toasts, toast, dismiss } = useToast();

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <Toaster toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
} 