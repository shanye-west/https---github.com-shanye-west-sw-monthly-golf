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
          Tournament Details
        </button>
        <button 
          className={activeTab === 'registration' ? 'active' : ''} 
          onClick={() => setActiveTab('registration')}
        >
          Registration
        </button>
        <button 
          className={activeTab === 'groups' ? 'active' : ''} 
          onClick={() => setActiveTab('groups')}
        >
          Groups & Tee Times
        </button>
        <button 
          className={activeTab === 'scoring' ? 'active' : ''} 
          onClick={() => setActiveTab('scoring')}
        >
          Live Scoring
        </button>
        <button 
          className={activeTab === 'leaderboard' ? 'active' : ''} 
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
      </div>

      {activeTab === 'details' && (
        <div className="event-details">
          <div className="tournament-info">
            <h2>Tournament Information</h2>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Course:</strong> {event.course.name}</p>
            <p><strong>Location:</strong> {event.course.address}</p>
            <p><strong>Entry Fee:</strong> ${event.entryFee}</p>
            <p><strong>Status:</strong> {event.status}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </div>
          
          <div className="course-info">
            <h2>Course Information</h2>
            <table className="course-layout">
              <thead>
                <tr>
                  <th>Hole</th>
                  <th>Par</th>
                  <th>Handicap</th>
                </tr>
              </thead>
              <tbody>
                {event.course.holes.map(hole => (
                  <tr key={hole.number}>
                    <td>{hole.number}</td>
                    <td>{hole.par}</td>
                    <td>{hole.handicap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'registration' && (
        <div className="registration">
          <h2>Player Registration</h2>
          <div className="registration-status">
            <p><strong>Registered Players:</strong> {event.participants.length}/{event.maxPlayers}</p>
          </div>
          <div className="registered-players">
            <h3>Registered Players</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Handicap</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {event.participants.map(player => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.handicap}</td>
                    <td>{player.email}</td>
                    <td>{player.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {event.participants.length < event.maxPlayers && (
            <button className="register-button">Register for Tournament</button>
          )}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="groups">
          <h2>Groups & Tee Times</h2>
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
                <button 
                  className="view-scorecard"
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
        </div>
      )}

      {activeTab === 'scoring' && (
        <div className="scoring">
          <h2>Live Scoring</h2>
          {selectedGroup ? (
            <div className="scorecard">
              <h3>Group {event.groups.find(g => g.id === selectedGroup)?.groupNumber} Scorecard</h3>
              <table>
                <thead>
                  <tr>
                    <th>Hole</th>
                    {event.groups.find(g => g.id === selectedGroup)?.members.map(member => (
                      <th key={member.id}>{member.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {event.course.holes.map(hole => (
                    <tr key={hole.number}>
                      <td>{hole.number}</td>
                      {event.groups.find(g => g.id === selectedGroup)?.members.map(member => (
                        <td key={member.id}>
                          <input 
                            type="number" 
                            min="1" 
                            max="20"
                            placeholder="Score"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="submit-scores">Submit Scores</button>
            </div>
          ) : (
            <p>Select a group to enter scores</p>
          )}
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
    </div>
  );
} 