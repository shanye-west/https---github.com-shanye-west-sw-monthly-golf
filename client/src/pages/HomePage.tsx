import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Calendar, Plus, Pencil, Trash2 } from "lucide-react";
import { useAuth } from "../lib/auth";
import { Button } from "../components/ui/button";

interface Event {
  id: number;
  name: string;
  date: string;
  courseName: string;
  startTime: string;
  isComplete: boolean;
  maxPlayers: number;
  entryFee: number;
  status: string;
}

const HomePage = () => {
  const { user } = useAuth();
  const isAdmin = user?.isAdmin;

  // Fetch events data
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold text-center mb-2">SW Monthly Golf Events</h1>
            <p className="text-center text-muted-foreground">Join us for our monthly golf tournaments</p>
          </div>
          {isAdmin && (
            <Button asChild>
              <Link to="/events/new" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Event
              </Link>
            </Button>
          )}
        </div>
        
        {events.length === 0 ? (
          <div className="bg-card text-card-foreground rounded-lg shadow-md p-8 text-center">
            <p className="text-muted-foreground">No events found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-card text-card-foreground rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-heading font-semibold text-primary">{event.name}</h2>
                      {isAdmin && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link to={`/events/${event.id}/edit`}>
                              <Pencil className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Course:</span> 
                        {event.courseName}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Time:</span> 
                        {event.startTime}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Entry Fee:</span> 
                        ${event.entryFee}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Status:</span> 
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          event.status === 'Open' ? 'bg-green-100 text-green-800' :
                          event.status === 'Full' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Players:</span> 
                        {event.maxPlayers} max
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full">
                      <Link to={`/events/${event.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage; 