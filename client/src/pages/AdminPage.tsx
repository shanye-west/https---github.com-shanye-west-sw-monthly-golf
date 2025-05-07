import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Calendar, Users, UserPlus, Settings, Trash2, RefreshCw, Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  deleteAllEvents,
  resetAllEvents,
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
  deleteAllGroups,
  resetAllGroups,
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
  deleteAllPlayers,
} from '@/lib/api';

type Event = {
  id: number;
  name: string;
  date: string;
  course: string;
  status: 'not_started' | 'in_progress' | 'completed';
  players: string[];
};

type Group = {
  id: number;
  name: string;
  eventId: number;
  status: 'not_started' | 'in_progress' | 'completed';
  players: string[];
};

type Player = {
  id: number;
  name: string;
  handicap: number;
  email: string;
  phone: string;
};

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<'events' | 'groups' | 'players' | 'settings'>('events');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch events data
  const { data: events = [], isLoading: isEventsLoading } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await getEvents();
      return response.json();
    },
  });

  // Fetch groups data
  const { data: groups = [], isLoading: isGroupsLoading } = useQuery<Group[]>({
    queryKey: ['groups'],
    queryFn: async () => {
      const response = await getGroups();
      return response.json();
    },
  });

  // Fetch players data
  const { data: players = [], isLoading: isPlayersLoading } = useQuery<Player[]>({
    queryKey: ['players'],
    queryFn: async () => {
      const response = await getPlayers();
      return response.json();
    },
  });

  // Event mutations
  const deleteEventMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast({
        title: 'Event deleted',
        description: 'The event has been deleted successfully',
      });
    },
  });

  const deleteAllEventsMutation = useMutation({
    mutationFn: deleteAllEvents,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast({
        title: 'All events deleted',
        description: 'All events have been deleted successfully',
      });
    },
  });

  const resetAllEventsMutation = useMutation({
    mutationFn: resetAllEvents,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast({
        title: 'Events reset',
        description: 'All events have been reset successfully',
      });
    },
  });

  // Group mutations
  const deleteGroupMutation = useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      toast({
        title: 'Group deleted',
        description: 'The group has been deleted successfully',
      });
    },
  });

  const deleteAllGroupsMutation = useMutation({
    mutationFn: deleteAllGroups,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      toast({
        title: 'All groups deleted',
        description: 'All groups have been deleted successfully',
      });
    },
  });

  const resetAllGroupsMutation = useMutation({
    mutationFn: resetAllGroups,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      toast({
        title: 'Groups reset',
        description: 'All groups have been reset successfully',
      });
    },
  });

  // Player mutations
  const deletePlayerMutation = useMutation({
    mutationFn: deletePlayer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['players'] });
      toast({
        title: 'Player deleted',
        description: 'The player has been deleted successfully',
      });
    },
  });

  const deleteAllPlayersMutation = useMutation({
    mutationFn: deleteAllPlayers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['players'] });
      toast({
        title: 'All players deleted',
        description: 'All players have been deleted successfully',
      });
    },
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
            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Settings className="w-4 h-4 inline-block mr-2" />
              Settings
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
                    {events.map((event) => (
                      <tr key={event.id} className="border-b border-border">
                        <td className="py-3 px-4">{event.name}</td>
                        <td className="py-3 px-4">{new Date(event.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4">{event.course}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                            event.status === 'completed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status === 'in_progress' ? 'In Progress' :
                             event.status === 'completed' ? 'Completed' :
                             'Not Started'}
                          </span>
                        </td>
                        <td className="py-3 px-4">{event.players.length}</td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:text-primary/90 mr-2">Edit</button>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this event?')) {
                                deleteEventMutation.mutate(event.id);
                              }
                            }}
                            className="text-destructive hover:text-destructive/90"
                          >
                            Delete
                          </button>
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
                    {groups.map((group) => (
                      <tr key={group.id} className="border-b border-border">
                        <td className="py-3 px-4">{group.name}</td>
                        <td className="py-3 px-4">
                          {events.find((e) => e.id === group.eventId)?.name || 'Unknown'}
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
                          <button className="text-primary hover:text-primary/90 mr-2">Edit</button>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this group?')) {
                                deleteGroupMutation.mutate(group.id);
                              }
                            }}
                            className="text-destructive hover:text-destructive/90"
                          >
                            Delete
                          </button>
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
                    {players.map((player) => (
                      <tr key={player.id} className="border-b border-border">
                        <td className="py-3 px-4">{player.name}</td>
                        <td className="py-3 px-4">{player.handicap}</td>
                        <td className="py-3 px-4">{player.email}</td>
                        <td className="py-3 px-4">{player.phone}</td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:text-primary/90 mr-2">Edit</button>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this player?')) {
                                deletePlayerMutation.mutate(player.id);
                              }
                            }}
                            className="text-destructive hover:text-destructive/90"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="p-6">
              <h2 className="text-2xl font-heading font-semibold mb-4">Settings</h2>
              <div className="space-y-6">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Trash2 className="w-5 h-5 mr-2" />
                    Danger Zone
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    These actions cannot be undone. Please be certain.
                  </p>
                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete all events? This cannot be undone.')) {
                          deleteAllEventsMutation.mutate();
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete All Events
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete all groups? This cannot be undone.')) {
                          deleteAllGroupsMutation.mutate();
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors ml-4"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete All Groups
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete all players? This cannot be undone.')) {
                          deleteAllPlayersMutation.mutate();
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors ml-4"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete All Players
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Reset Data
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Reset data to its initial state. This will not delete any records.
                  </p>
                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to reset all events? This will set them back to their initial state.')) {
                          resetAllEventsMutation.mutate();
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Reset All Events
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to reset all groups? This will set them back to their initial state.')) {
                          resetAllGroupsMutation.mutate();
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-colors ml-4"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Reset All Groups
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 