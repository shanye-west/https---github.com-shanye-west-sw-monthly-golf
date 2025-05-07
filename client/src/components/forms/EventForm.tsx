import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EventFormProps {
  event?: {
    id: number;
    name: string;
    date: string;
    courseName: string;
    startTime: string;
    maxPlayers: number;
    entryFee: number;
    status: string;
  };
  onClose: () => void;
}

const EventForm = ({ event, onClose }: EventFormProps) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: event?.name || '',
    date: event?.date ? new Date(event.date).toISOString().split('T')[0] : '',
    startTime: event?.startTime || '',
    courseName: event?.courseName || '',
    maxPlayers: event?.maxPlayers || 0,
    entryFee: event?.entryFee || 0,
    status: event?.status || 'Open',
  });

  const createEventMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/events'] });
      onClose();
    },
  });

  const updateEventMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch(`/api/events/${event?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update event');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/events'] });
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (event) {
      updateEventMutation.mutate(formData);
    } else {
      createEventMutation.mutate(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxPlayers' || name === 'entryFee' ? Number(value) : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Event Name
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
        <label htmlFor="date" className="block text-sm font-medium mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="startTime" className="block text-sm font-medium mb-1">
          Start Time
        </label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="courseName" className="block text-sm font-medium mb-1">
          Course Name
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="maxPlayers" className="block text-sm font-medium mb-1">
          Max Players
        </label>
        <input
          type="number"
          id="maxPlayers"
          name="maxPlayers"
          value={formData.maxPlayers}
          onChange={handleChange}
          required
          min="1"
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
      </div>

      <div>
        <label htmlFor="entryFee" className="block text-sm font-medium mb-1">
          Entry Fee
        </label>
        <input
          type="number"
          id="entryFee"
          name="entryFee"
          value={formData.entryFee}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="w-full px-3 py-2 border border-border rounded-md bg-background"
        />
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
          <option value="Open">Open</option>
          <option value="Full">Full</option>
          <option value="Closed">Closed</option>
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
          {event ? 'Update Event' : 'Create Event'}
        </button>
      </div>
    </form>
  );
};

export default EventForm; 