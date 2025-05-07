import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import EventPage from './pages/EventPage'

const API_URL = 'http://localhost:3000';

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

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
      <h2 className="text-xl font-heading font-semibold mb-4">{event.name}</h2>
      <div className="space-y-2 text-sm">
        <p><span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString()}</p>
        <p><span className="font-medium">Course:</span> {event.course.name}</p>
        <p><span className="font-medium">Location:</span> {event.course.address}</p>
        <p><span className="font-medium">Entry Fee:</span> ${event.entryFee}</p>
        <p><span className="font-medium">Status:</span> {event.status}</p>
        <p><span className="font-medium">Participants:</span> {event.participants.length}/{event.maxPlayers}</p>
      </div>
      <Link 
        to={`/events/${event.id}`} 
        className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        View Details
      </Link>
    </div>
  )
}

function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/api/events`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-muted-foreground">Loading events...</div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-destructive">Error: {error}</div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold text-center mb-8">SW Monthly Golf Events</h1>
      {events.length === 0 ? (
        <p className="text-center text-muted-foreground">No events found. Check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}

function GroupPage() {
  return (
    <div className="container">
      <h1>Group Scorecard</h1>
      {/* We'll implement this next */}
    </div>
  )
}

function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
        <p className="text-muted-foreground">Admin features coming soon...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Router>
        <header className="bg-card shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex justify-between items-center">
              <Link to="/" className="text-xl font-heading font-semibold text-primary">
                SW Golf
              </Link>
              <div className="flex items-center space-x-4">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/admin" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Admin
                </Link>
              </div>
            </nav>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/groups/:id" element={<GroupPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
