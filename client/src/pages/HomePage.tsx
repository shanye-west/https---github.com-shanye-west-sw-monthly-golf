import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

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
        <h1 className="text-4xl font-heading font-bold text-center mb-2">SW Monthly Golf Events</h1>
        <p className="text-center text-muted-foreground mb-8">Join us for our monthly golf tournaments</p>
        
        {events.length === 0 ? (
          <div className="bg-card text-card-foreground rounded-lg shadow-md p-8 text-center">
            <p className="text-muted-foreground">No events found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Link 
                key={event.id} 
                to={`/events/${event.id}`}
                className="bg-card text-card-foreground rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-xl font-heading font-semibold mb-4 text-primary">{event.name}</h2>
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
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage; 