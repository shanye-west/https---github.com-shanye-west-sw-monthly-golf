import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Calendar, Users, UserPlus, Plus } from "lucide-react";

interface Event {
  id: number;
  name: string;
  date: string;
  courseName: string;
  startTime: string;
  maxPlayers: number;
  entryFee: number;
  status: string;
}

interface Group {
  id: number;
  name: string;
  status: string;
  players: string[];
  currentHole: number;
  eventId: number;
}

interface Player {
  id: number;
  name: string;
  handicap: number;
  email: string;
  phone: string;
}

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<'events' | 'groups' | 'players'>('events');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Fetch events data
  const { data: events = [], isLoading: isEventsLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Fetch groups data
  const { data: groups = [], isLoading: isGroupsLoading } = useQuery<Group[]>({
    queryKey: ['/api/groups'],
  });

  // Fetch players data
  const { data: players = [], isLoading: isPlayersLoading } = useQuery<Player[]>({
    queryKey: ['/api/players'],
  });

  const isLoading = isEventsLoading || isGroupsLoading || isPlayersLoading;

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading admin data...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-heading font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('events')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Calendar className="w-4 h-4 inline-block mr-2" />
              Events
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'groups'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="w-4 h-4 inline-block mr-2" />
              Groups
            </button>
            <button
              onClick={() => setActiveTab('players')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'players'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <UserPlus className="w-4 h-4 inline-block mr-2" />
              Players
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-card text-card-foreground rounded-lg shadow-md">
          {activeTab === 'events' && (
            <div className="p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4">Events</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Course</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Players</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event: Event) => (
                      <tr key={event.id} className="border-b border-border">
                        <td className="py-3 px-4">{event.name}</td>
                        <td className="py-3 px-4">{new Date(event.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4">{event.courseName}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.status === 'Open' ? 'bg-green-100 text-green-800' :
                            event.status === 'Full' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{event.maxPlayers}</td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:text-primary/90">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'groups' && (
            <div className="p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4">Groups</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Event</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Players</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groups.map((group: Group) => (
                      <tr key={group.id} className="border-b border-border">
                        <td className="py-3 px-4">{group.name}</td>
                        <td className="py-3 px-4">
                          {events.find((e: Event) => e.id === group.eventId)?.name || 'Unknown'}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            group.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                            group.status === 'completed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {group.status === 'in_progress' ? 'In Progress' :
                             group.status === 'completed' ? 'Completed' :
                             'Not Started'}
                          </span>
                        </td>
                        <td className="py-3 px-4">{group.players.join(', ')}</td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:text-primary/90">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'players' && (
            <div className="p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4">Players</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Handicap</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player: Player) => (
                      <tr key={player.id} className="border-b border-border">
                        <td className="py-3 px-4">{player.name}</td>
                        <td className="py-3 px-4">{player.handicap}</td>
                        <td className="py-3 px-4">{player.email}</td>
                        <td className="py-3 px-4">{player.phone}</td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:text-primary/90">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 