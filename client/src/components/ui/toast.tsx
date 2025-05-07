import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ToastProps {
  id: string;
  title: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning';
  duration?: number;
  onDismiss: (id: string) => void;
}

const toastStyles = {
  default: 'bg-white border-gray-200',
  success: 'bg-green-50 border-green-200',
  error: 'bg-red-50 border-red-200',
  warning: 'bg-yellow-50 border-yellow-200',
};

export function Toast({ id, title, description, type = 'default', duration = 3000, onDismiss }: ToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateProgress = () => {
      const now = Date.now();
      const remaining = endTime - now;
      const newProgress = (remaining / duration) * 100;

      if (newProgress <= 0) {
        onDismiss(id);
        return;
      }

      setProgress(newProgress);
      requestAnimationFrame(updateProgress);
    };

    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, id, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`relative flex w-full items-center space-x-4 rounded-lg border p-4 shadow-lg ${toastStyles[type]}`}
    >
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      >
        <X className="h-4 w-4" />
      </button>
      <div
        className="absolute bottom-0 left-0 h-1 bg-gray-200"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  );
}

export function Toaster({ toasts, dismiss }: { toasts: any[]; dismiss: (id: string) => void }) {
  return (
    <div className="fixed bottom-0 right-0 z-50 m-8 flex max-h-screen w-full max-w-md flex-col-reverse gap-2 overflow-hidden p-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={dismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
} 