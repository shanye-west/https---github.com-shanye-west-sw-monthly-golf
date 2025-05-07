import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';
import AddEventModal from '@/components/AddEventModal';

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  maxPlayers: number;
  entryFee: number;
  status: string;
  course: {
    name: string;
    address: string;
  };
  participants: {
    name: string;
    handicap: number;
  }[];
}

export default function HomePage() {
  const { user } = useAuth();
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);

  const { data: events, isLoading, refetch } = useQuery<Event[]>({
    queryKey: ['/api/events'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-card rounded-lg p-6 h-48" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        {user?.isAdmin && (
          <Button onClick={() => setIsAddEventModalOpen(true)}>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events?.map((event: Event) => (
          <Link 
            key={event.id} 
            to={`/events/${event.id}`}
            className="block bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <span className={`px-2 py-1 rounded text-sm ${
                  event.status === 'open' ? 'bg-green-100 text-green-800' :
                  event.status === 'full' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <span className="font-medium">Date:</span>
                  <span className="ml-2">{new Date(event.date).toLocaleDateString()}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium">Course:</span>
                  <span className="ml-2">{event.course.name}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium">Players:</span>
                  <span className="ml-2">{event.participants.length}/{event.maxPlayers}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium">Entry Fee:</span>
                  <span className="ml-2">${event.entryFee}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AddEventModal 
        isOpen={isAddEventModalOpen}
        onClose={() => setIsAddEventModalOpen(false)}
        onEventAdded={() => refetch()}
      />
    </div>
  );
} 