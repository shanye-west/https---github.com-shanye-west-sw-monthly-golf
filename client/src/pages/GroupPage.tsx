import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Lock, Unlock } from "lucide-react";
import Scorecard from "@/components/Scorecard";

interface Group {
  id: number;
  name: string;
  status: string;
  players: string[];
  currentHole: number;
  eventId: number;
  locked?: boolean;
}

interface Event {
  id: number;
  name: string;
  date: string;
  courseName: string;
  startTime: string;
  isComplete: boolean;
  courseId: number;
}

interface Hole {
  id: number;
  number: number;
  par: number;
}

interface Score {
  id: number;
  groupId: number;
  holeNumber: number;
  playerScore: number | null;
  playerId: number;
}

interface Player {
  id: number;
  name: string;
  handicap: number;
}

const GroupPage = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const [isLocked, setIsLocked] = useState(false);

  // Fetch group data
  const { data: group, isLoading: isGroupLoading } = useQuery<Group>({
    queryKey: [`/api/groups/${id}`],
    enabled: !!id,
  });

  // Fetch event data
  const { data: event, isLoading: isEventLoading } = useQuery<Event>({
    queryKey: [`/api/events/${group?.eventId}`],
    enabled: !!group?.eventId,
  });

  // Fetch holes data for the course
  const { data: holes = [], isLoading: isHolesLoading } = useQuery<Hole[]>({
    queryKey: [`/api/holes?courseId=${event?.courseId}`],
    enabled: !!event?.courseId,
  });

  // Fetch scores for this group
  const { data: scores = [], isLoading: isScoresLoading } = useQuery<Score[]>({
    queryKey: [`/api/scores?groupId=${id}`],
    enabled: !!id,
  });

  // Fetch players for this group
  const { data: players = [], isLoading: isPlayersLoading } = useQuery<Player[]>({
    queryKey: [`/api/group-players?groupId=${id}`],
    enabled: !!id,
  });

  // Update lock status when group data changes
  useEffect(() => {
    if (group) {
      setIsLocked(!!group.locked);
    }
  }, [group]);

  // Function to update score
  const updateScoreMutation = useMutation({
    mutationFn: async (scoreData: {
      groupId: number;
      holeNumber: number;
      playerId: number;
      playerScore: number | null;
    }) => {
      const existingScore = scores?.find(
        (s: Score) => s.holeNumber === scoreData.holeNumber && s.playerId === scoreData.playerId
      );

      if (existingScore) {
        // Update existing score
        return fetch(`/api/scores/${existingScore.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scoreData),
        });
      } else {
        // Create new score
        return fetch("/api/scores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scoreData),
        });
      }
    },
    onSuccess: () => {
      // Invalidate the scores query to refetch the data
      queryClient.invalidateQueries({ queryKey: [`/api/scores?groupId=${id}`] });
    },
  });

  // Function to toggle lock status
  const toggleLockMutation = useMutation({
    mutationFn: async () => {
      return fetch(`/api/groups/${id}/toggle-lock`, {
        method: "POST",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/groups/${id}`] });
    },
  });

  const handleScoreUpdate = (
    holeNumber: number,
    playerId: number,
    score: number | null,
  ) => {
    if (isLocked) return;

    updateScoreMutation.mutate({
      groupId: Number(id),
      holeNumber,
      playerId,
      playerScore: score,
    });
  };

  const handleToggleLock = () => {
    toggleLockMutation.mutate();
  };

  if (isGroupLoading || isEventLoading || isHolesLoading || isScoresLoading || isPlayersLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading group details...</div>
      </div>
    );
  }

  if (!group || !event) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-lg text-destructive">Group not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to={`/events/${event.id}`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Event
          </Link>
          <button
            onClick={handleToggleLock}
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {isLocked ? (
              <>
                <Unlock className="w-4 h-4 mr-2" />
                Unlock Scores
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Lock Scores
              </>
            )}
          </button>
        </div>

        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">{group.name}</h1>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Event:</span>
              {event.name}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Course:</span>
              {event.courseName}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Date:</span>
              {new Date(event.date).toLocaleDateString()}
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
          </div>
        </div>

        <Scorecard
          eventId={event.id}
          holes={holes}
          scores={scores}
          players={players}
          locked={isLocked}
          onScoreUpdate={handleScoreUpdate}
        />
      </div>
    </div>
  );
};

export default GroupPage; 