import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEventAdded: () => void;
}

export default function AddEventModal({ isOpen, onClose, onEventAdded }: AddEventModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
    maxPlayers: 0,
    entryFee: 0,
    course: {
      name: '',
      address: '',
    }
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      toast({
        title: "Success",
        description: "Event created successfully"
      });
      onEventAdded();
      onClose();
    } catch (error) {
      console.error('Error creating event:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create event"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Add New Event</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <XMarkIcon className="h-4 w-4" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Event Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Date
              </label>
              <input
                id="date"
                type="datetime-local"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="maxPlayers" className="block text-sm font-medium mb-1">
                  Max Players
                </label>
                <input
                  id="maxPlayers"
                  type="number"
                  required
                  min="1"
                  value={formData.maxPlayers}
                  onChange={(e) => setFormData({ ...formData, maxPlayers: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="entryFee" className="block text-sm font-medium mb-1">
                  Entry Fee ($)
                </label>
                <input
                  id="entryFee"
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.entryFee}
                  onChange={(e) => setFormData({ ...formData, entryFee: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Course Details</h3>
              <div>
                <label htmlFor="courseName" className="block text-sm font-medium mb-1">
                  Course Name
                </label>
                <input
                  id="courseName"
                  type="text"
                  required
                  value={formData.course.name}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    course: { ...formData.course, name: e.target.value }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="courseAddress" className="block text-sm font-medium mb-1">
                  Course Address
                </label>
                <input
                  id="courseAddress"
                  type="text"
                  required
                  value={formData.course.address}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    course: { ...formData.course, address: e.target.value }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Creating...' : 'Create Event'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 