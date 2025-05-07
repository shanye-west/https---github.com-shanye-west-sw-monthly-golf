import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface GroupFormProps {
  eventId: number;
  group?: {
    id: number;
    name: string;
    eventId: number;
    players: number[];
    status: string;
  };
  onClose: () => void;
}

interface Player {
  id: number;
  name: string;
  handicap: number;
}

const GroupForm = ({ eventId, group, onClose }: GroupFormProps) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: group?.name || '',
    players: group?.players || [],
    status: group?.status || 'Active',
  });

  const { data: players = [] } = useQuery<Player[]>({
    queryKey: ['/api/players'],
    queryFn: async () => {
      const response = await fetch('/api/players');
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      return response.json();
    },
  });

  const createGroupMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, eventId }),
      });
      if (!response.ok) {
        throw new Error('Failed to create group');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/groups'] });
      onClose();
    },
  });

  const updateGroupMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch(`/api/groups/${group?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, eventId }),
      });
      if (!response.ok) {
        throw new Error('Failed to update group');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/groups'] });
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (group) {
      updateGroupMutation.mutate(formData);
    } else {
      createGroupMutation.mutate(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlayerChange = (playerId: number) => {
    setFormData(prev => ({
      ...prev,
      players: prev.players.includes(playerId)
        ? prev.players.filter(id => id !== playerId)
        : [...prev.players, playerId],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Group Name
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
        <label className="block text-sm font-medium mb-1">
          Players
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {players.map((player: Player) => (
            <label key={player.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.players.includes(player.id)}
                onChange={() => handlePlayerChange(player.id)}
                className="rounded border-border"
              />
              <span>
                {player.name} (Handicap: {player.handicap})
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium mb-1">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
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
          {group ? 'Update Group' : 'Create Group'}
        </button>
      </div>
    </form>
  );
};

export default GroupForm; 