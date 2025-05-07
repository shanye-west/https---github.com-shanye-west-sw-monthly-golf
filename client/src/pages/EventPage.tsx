import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

export default function EventPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'leaderboard' | 'groups' | 'registration' | 'scoring'>('details');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${API_URL}/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching event:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-muted-foreground">Loading event details...</div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-destructive">Error: {error}</div>
    </div>
  );
  
  if (!event) return (
    <div className="min-h-screen flex items-center justify-center">
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
      <h1 className="text-3xl font-heading font-bold text-center mb-8">{event.name}</h1>
      
      <div className="flex space-x-2 border-b border-border mb-8">
        <button 
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'details' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('details')}
        >
          Tournament Details
        </button>
        <button 
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'registration' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('registration')}
        >
          Registration
        </button>
        <button 
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'groups' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('groups')}
        >
          Groups & Tee Times
        </button>
        <button 
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'scoring' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('scoring')}
        >
          Live Scoring
        </button>
        <button 
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'leaderboard' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
      </div>

      {activeTab === 'details' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
            <h2 className="text-xl font-heading font-semibold mb-4">Tournament Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString()}</p>
              <p><span className="font-medium">Course:</span> {event.course.name}</p>
              <p><span className="font-medium">Location:</span> {event.course.address}</p>
              <p><span className="font-medium">Entry Fee:</span> ${event.entryFee}</p>
              <p><span className="font-medium">Status:</span> {event.status}</p>
              <p><span className="font-medium">Description:</span> {event.description}</p>
            </div>
          </div>
          
          <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
            <h2 className="text-xl font-heading font-semibold mb-4">Course Information</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 text-left">Hole</th>
                    <th className="px-4 py-2 text-left">Par</th>
                    <th className="px-4 py-2 text-left">Handicap</th>
                  </tr>
                </thead>
                <tbody>
                  {event.course.holes.map(hole => (
                    <tr key={hole.number} className="border-b border-border">
                      <td className="px-4 py-2">{hole.number}</td>
                      <td className="px-4 py-2">{hole.par}</td>
                      <td className="px-4 py-2">{hole.handicap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'registration' && (
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-xl font-heading font-semibold mb-4">Player Registration</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <p className="font-medium">Registered Players: {event.participants.length}/{event.maxPlayers}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Handicap</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {event.participants.map(player => (
                  <tr key={player.id} className="border-b border-border">
                    <td className="px-4 py-2">{player.name}</td>
                    <td className="px-4 py-2">{player.handicap}</td>
                    <td className="px-4 py-2">{player.email}</td>
                    <td className="px-4 py-2">{player.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {event.participants.length < event.maxPlayers && (
            <button className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Register for Tournament
            </button>
          )}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {event.groups.map(group => (
            <div key={group.id} className="bg-card text-card-foreground rounded-lg shadow-md p-6">
              <h3 className="text-lg font-heading font-semibold mb-2">Group {group.groupNumber}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tee Time: {new Date(group.teeTime).toLocaleTimeString()}
              </p>
              <ul className="space-y-2">
                {group.members.map(member => (
                  <li key={member.id} className="border-b border-border pb-2">
                    {member.name} <span className="text-muted-foreground">(Handicap: {member.handicap})</span>
                  </li>
                ))}
              </ul>
              <button 
                className="mt-4 w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => {
                  setSelectedGroup(group.id);
                  setActiveTab('scoring');
                }}
              >
                Enter Scores
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'scoring' && (
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-xl font-heading font-semibold mb-4">Live Scoring</h2>
          {selectedGroup ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 text-left">Hole</th>
                    {event.groups.find(g => g.id === selectedGroup)?.members.map(member => (
                      <th key={member.id} className="px-4 py-2 text-left">{member.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {event.course.holes.map(hole => (
                    <tr key={hole.number} className="border-b border-border">
                      <td className="px-4 py-2">{hole.number}</td>
                      {event.groups.find(g => g.id === selectedGroup)?.members.map(member => (
                        <td key={member.id} className="px-4 py-2">
                          <input 
                            type="number" 
                            min="1" 
                            max="20"
                            className="w-16 px-2 py-1 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Score"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Submit Scores
              </button>
            </div>
          ) : (
            <p className="text-muted-foreground">Select a group to enter scores</p>
          )}
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-xl font-heading font-semibold mb-4">Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left">Position</th>
                  <th className="px-4 py-2 text-left">Player</th>
                  <th className="px-4 py-2 text-left">Handicap</th>
                  <th className="px-4 py-2 text-left">Gross</th>
                  <th className="px-4 py-2 text-left">Net</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((player, index) => (
                  <tr key={player.id} className="border-b border-border">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{player.name}</td>
                    <td className="px-4 py-2">{player.handicap}</td>
                    <td className="px-4 py-2">{player.totalGross}</td>
                    <td className="px-4 py-2">{player.totalNet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
} 