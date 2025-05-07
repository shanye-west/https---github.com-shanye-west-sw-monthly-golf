import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    id: string;
    name: string;
    handicap: number;
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
  const [activeTab, setActiveTab] = useState<'details' | 'leaderboard' | 'groups'>('details');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div>Loading event details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!event) return <div>Event not found</div>;

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
    <div className="container">
      <h1>{event.name}</h1>
      
      <div className="tabs">
        <button 
          className={activeTab === 'details' ? 'active' : ''} 
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button 
          className={activeTab === 'leaderboard' ? 'active' : ''} 
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
        <button 
          className={activeTab === 'groups' ? 'active' : ''} 
          onClick={() => setActiveTab('groups')}
        >
          Groups
        </button>
      </div>

      {activeTab === 'details' && (
        <div className="event-details">
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Course:</strong> {event.course.name}</p>
          <p><strong>Location:</strong> {event.course.address}</p>
          <p><strong>Entry Fee:</strong> ${event.entryFee}</p>
          <p><strong>Status:</strong> {event.status}</p>
          <p><strong>Description:</strong> {event.description}</p>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Handicap</th>
                <th>Gross</th>
                <th>Net</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((player, index) => (
                <tr key={player.id}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.handicap}</td>
                  <td>{player.totalGross}</td>
                  <td>{player.totalNet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="groups">
          <h2>Groups</h2>
          <div className="groups-grid">
            {event.groups.map(group => (
              <div key={group.id} className="group-card">
                <h3>Group {group.groupNumber}</h3>
                <p><strong>Tee Time:</strong> {new Date(group.teeTime).toLocaleTimeString()}</p>
                <ul>
                  {group.members.map(member => (
                    <li key={member.id}>
                      {member.name} (Handicap: {member.handicap})
                    </li>
                  ))}
                </ul>
                <a 
                  href="#" 
                  className="view-scorecard"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/groups/${group.id}`);
                  }}
                >
                  View Scorecard
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 