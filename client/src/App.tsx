import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import EventPage from "@/pages/EventPage";
import GroupPage from "@/pages/GroupPage";
import './App.css'

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
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h2 className="text-xl font-heading font-semibold mb-4 text-primary">{event.name}</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Date:</span> 
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Course:</span> 
              {event.course.name}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Location:</span> 
              {event.course.address}
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
              <span className="font-medium text-foreground">Participants:</span> 
              {event.participants.length}/{event.maxPlayers}
            </p>
          </div>
        </div>
        <Link 
          to={`/events/${event.id}`} 
          className="mt-6 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-center mb-2">Admin Dashboard</h1>
        <p className="text-center text-muted-foreground mb-8">Manage tournaments and players</p>
        
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-8">
          <p className="text-muted-foreground text-center">Admin features coming soon...</p>
        </div>
      </div>
    </div>
  )
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/groups/:id" element={<GroupPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
