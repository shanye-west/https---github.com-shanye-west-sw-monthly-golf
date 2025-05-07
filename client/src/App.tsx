import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import EventPage from './pages/EventPage'

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
    <div className="event-card">
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Course:</strong> {event.course.name}</p>
      <p><strong>Location:</strong> {event.course.address}</p>
      <p><strong>Entry Fee:</strong> ${event.entryFee}</p>
      <p><strong>Status:</strong> {event.status}</p>
      <p><strong>Participants:</strong> {event.participants.length}/{event.maxPlayers}</p>
      <Link to={`/events/${event.id}`} className="view-details">View Details</Link>
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
        const response = await fetch('http://localhost:3000/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1>SW Monthly Golf Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
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
    <div className="container">
      <h1>Admin Dashboard</h1>
      {/* We'll implement this next */}
    </div>
  )
}

function App() {
  console.log('App component rendering');
  
  return (
    <div style={{ padding: '20px' }}>
      <Router>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/groups/:id" element={<GroupPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
