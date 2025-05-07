import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Users, Plus, Pencil, Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../lib/auth";
import { Button } from "../components/ui/button";

const API_URL = 'http://localhost:3001';

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
    holes: {
      number: number;
      par: number;
      handicap: number;
    }[];
  };
  participants: {
    id: string;
    name: string;
    handicap: number;
    email: string;
    phone: string;
  }[];
  groups: {
    id: string;
    groupNumber: number;
    teeTime: string;
    members: {
      id: string;
      name: string;
      handicap: number;
    }[];
  }[];
  scores: {
    userId: string;
    holeId: string;
    grossScore: number;
    netScore: number;
    skinWon: boolean;
  }[];
}

interface Group {
  id: number;
  name: string;
  status: string;
  players: string[];
  currentHole: number;
  eventId: number;
}

export default function EventPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.isAdmin;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'leaderboard' | 'groups' | 'registration' | 'scoring'>('details');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  // Fetch event data
  const { data: eventData, isLoading: isEventLoading } = useQuery<Event>({
    queryKey: [`/api/events/${id}`],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/events/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch event');
      }
      return response.json();
    },
    enabled: !!id,
  });

  // Fetch groups for this event
  const { data: groups = [], isLoading: isGroupsLoading } = useQuery<Group[]>({
    queryKey: [`/api/groups?eventId=${id}`],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/groups?eventId=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch groups');
      }
      return response.json();
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (eventData) {
      setEvent(eventData);
      setLoading(false);
    }
  }, [eventData]);

  if (isEventLoading || isGroupsLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading event details...</div>
      </div>
    );
  }
  
  if (error) return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-lg text-destructive">Error: {error}</div>
    </div>
  );
  
  if (!event) return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-lg text-muted-foreground">Event not found</div>
    </div>
  );

  const calculateLeaderboard = () => {
    const playerScores = event.participants.map(player => {
      const playerScores = event.scores.filter(score => score.userId === player.id);
      const totalGross = playerScores.reduce((sum, score) => sum + score.grossScore, 0);
      const totalNet = playerScores.reduce((sum, score) => sum + score.netScore, 0);
      return {
        ...player,
        totalGross,
        totalNet,
      };
    });

    return playerScores.sort((a, b) => a.totalNet - b.totalNet);
  };

  const leaderboard = calculateLeaderboard();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Events
        </Link>

        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-heading font-bold">{event.name}</h1>
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
              <span className="font-medium text-foreground">Date:</span>
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Course:</span>
              {event.course.name}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Time:</span>
              {new Date(event.date).toLocaleTimeString()}
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
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-heading font-semibold">Groups</h2>
          {isAdmin && (
            <Button asChild>
              <Link to={`/events/${event.id}/groups/new`} className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Group
              </Link>
            </Button>
          )}
        </div>
        
        {groups.length === 0 ? (
          <div className="bg-card text-card-foreground rounded-lg shadow-md p-8 text-center">
            <p className="text-muted-foreground">No groups found for this event.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groups.map((group: Group) => (
              <div
                key={group.id}
                className="bg-card text-card-foreground rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{group.name}</h3>
                      {isAdmin && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link to={`/groups/${group.id}/edit`}>
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
                        <Users className="w-4 h-4" />
                        <span>{group.players.join(", ")}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          group.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                          group.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {group.status === 'in_progress' ? 'In Progress' :
                           group.status === 'completed' ? 'Completed' :
                           'Not Started'}
                        </span>
                      </p>
                      {group.status === 'in_progress' && (
                        <p className="flex items-center gap-2">
                          <span className="font-medium text-foreground">Current Hole:</span>
                          {group.currentHole}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full">
                      <Link to={`/groups/${group.id}`}>
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
} 