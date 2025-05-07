import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PlayerFormProps {
  player?: {
    id: number;
    name: string;
    handicap: number;
    email?: string;
    phone?: string;
  };
  onClose: () => void;
}

const PlayerForm = ({ player, onClose }: PlayerFormProps) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: player?.name || '',
    handicap: player?.handicap || 0,
    email: player?.email || '',
    phone: player?.phone || '',
  });

  const createPlayerMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create player');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/players'] });
      onClose();
    },
  });

  const updatePlayerMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch(`/api/players/${player?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update player');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/players'] });
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player) {
      updatePlayerMutation.mutate(formData);
    } else {
      createPlayerMutation.mutate(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'handicap' ? Number(value) : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Player Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="handicap" className="block text-sm font-medium mb-1">
          Handicap
        </label>
        <input
          type="number"
          id="handicap"
          name="handicap"
          value={formData.handicap}
          onChange={handleChange}
          required
          min="0"
          max="54"
          step="0.1"
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {player ? 'Update Player' : 'Create Player'}
        </button>
      </div>
    </form>
  );
};

export default PlayerForm; 