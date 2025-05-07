import { useMemo } from "react";

interface Hole {
  id: number;
  number: number;
  par: number;
}

interface Score {
  id: number;
  eventId: number;
  holeNumber: number;
  playerScore: number | null;
  playerId: number;
}

interface Player {
  id: number;
  name: string;
  handicap: number;
}

interface ScorecardProps {
  eventId: number;
  holes: Hole[];
  scores: Score[];
  players: Player[];
  locked: boolean;
  onScoreUpdate: (
    holeNumber: number,
    playerId: number,
    score: number | null,
  ) => void;
}

const Scorecard = ({
  eventId,
  holes,
  scores,
  players,
  locked = false,
  onScoreUpdate,
}: ScorecardProps) => {
  const allHoles = [...holes].sort((a, b) => a.number - b.number);
  const frontNine = [...holes].filter((h) => h.number <= 9).sort((a, b) => a.number - b.number);
  const backNine = [...holes].filter((h) => h.number > 9).sort((a, b) => a.number - b.number);

  // Get score for a specific hole and player
  const getScore = (holeNumber: number, playerId: number): Score | undefined => {
    return scores.find(
      (score) => score.holeNumber === holeNumber && score.playerId === playerId
    );
  };

  // Get score input value for display
  const getScoreInputValue = (
    holeNumber: number,
    playerId: number,
  ): string => {
    const score = getScore(holeNumber, playerId);
    return score?.playerScore?.toString() || "";
  };

  // Handle score changes
  const handleScoreChange = (
    holeNumber: number,
    playerId: number,
    value: string,
    target: HTMLInputElement,
  ) => {
    // Validate input
    if (value === "") {
      onScoreUpdate(holeNumber, playerId, null);
      return;
    }

    const numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 1 || numValue > 12) {
      target.value = getScoreInputValue(holeNumber, playerId);
      return;
    }

    onScoreUpdate(holeNumber, playerId, numValue);
  };

  // Calculate totals for each player
  const playerTotals = useMemo(() => {
    const totals = new Map<number, number>();

    players.forEach((player) => {
      let total = 0;
      allHoles.forEach((hole) => {
        const score = getScore(hole.number, player.id);
        if (score?.playerScore) {
          total += score.playerScore;
        }
      });
      totals.set(player.id, total);
    });

    return totals;
  }, [scores, players, allHoles]);

  // Calculate front nine totals
  const playerFrontNineTotals = useMemo(() => {
    const totals = new Map<number, number>();

    players.forEach((player) => {
      let total = 0;
      frontNine.forEach((hole) => {
        const score = getScore(hole.number, player.id);
        if (score?.playerScore) {
          total += score.playerScore;
        }
      });
      totals.set(player.id, total);
    });

    return totals;
  }, [scores, players, frontNine]);

  // Calculate back nine totals
  const playerBackNineTotals = useMemo(() => {
    const totals = new Map<number, number>();

    players.forEach((player) => {
      let total = 0;
      backNine.forEach((hole) => {
        const score = getScore(hole.number, player.id);
        if (score?.playerScore) {
          total += score.playerScore;
        }
      });
      totals.set(player.id, total);
    });

    return totals;
  }, [scores, players, backNine]);

  return (
    <div className="scorecard-container">
      <div>
        <table className="w-full text-sm scorecard-table">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-2 text-left font-semibold sticky-column bg-gray-100">
                Player
              </th>
              {/* Front Nine Holes */}
              {frontNine.map((hole) => (
                <th
                  key={hole.number}
                  className="py-2 px-2 text-center font-semibold"
                >
                  {hole.number}
                </th>
              ))}
              <th className="py-2 px-2 text-center font-semibold bg-gray-200">
                OUT
              </th>
              {/* Back Nine Holes */}
              {backNine.map((hole) => (
                <th
                  key={hole.number}
                  className="py-2 px-2 text-center font-semibold"
                >
                  {hole.number}
                </th>
              ))}
              <th className="py-2 px-2 text-center font-semibold bg-gray-200">
                IN
              </th>
              <th className="py-2 px-2 text-center font-semibold bg-gray-300">
                TOTAL
              </th>
            </tr>
            <tr className="bg-gray-50">
              <th className="py-2 px-2 text-left font-semibold sticky-column bg-gray-50">
                Par
              </th>
              {/* Front Nine Pars */}
              {frontNine.map((hole) => (
                <td key={hole.number} className="py-2 px-2 text-center">
                  {hole.par}
                </td>
              ))}
              <td className="py-2 px-2 text-center font-semibold bg-gray-100">
                {frontNine.reduce((sum, hole) => sum + hole.par, 0)}
              </td>
              {/* Back Nine Pars */}
              {backNine.map((hole) => (
                <td key={hole.number} className="py-2 px-2 text-center">
                  {hole.par}
                </td>
              ))}
              <td className="py-2 px-2 text-center font-semibold bg-gray-100">
                {backNine.reduce((sum, hole) => sum + hole.par, 0)}
              </td>
              <td className="py-2 px-2 text-center font-semibold bg-gray-200">
                {allHoles.reduce((sum, hole) => sum + hole.par, 0)}
              </td>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-b border-gray-200">
                <td className="py-2 px-2 sticky-column bg-white">
                  <div className="text-sm font-medium">
                    {player.name}
                    <span className="text-xs text-gray-500 ml-2">
                      (HCP: {player.handicap})
                    </span>
                  </div>
                </td>
                {/* Front Nine Scores */}
                {frontNine.map((hole) => (
                  <td key={hole.number} className="py-2 px-2 text-center">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="score-input w-8 h-8 text-center border border-gray-300 rounded"
                      value={getScoreInputValue(hole.number, player.id)}
                      onChange={(e) =>
                        handleScoreChange(
                          hole.number,
                          player.id,
                          e.target.value,
                          e.target
                        )
                      }
                      min="1"
                      max="12"
                      disabled={locked}
                    />
                  </td>
                ))}
                <td className="py-2 px-2 text-center font-semibold bg-gray-100">
                  {playerFrontNineTotals.get(player.id) || ""}
                </td>
                {/* Back Nine Scores */}
                {backNine.map((hole) => (
                  <td key={hole.number} className="py-2 px-2 text-center">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="score-input w-8 h-8 text-center border border-gray-300 rounded"
                      value={getScoreInputValue(hole.number, player.id)}
                      onChange={(e) =>
                        handleScoreChange(
                          hole.number,
                          player.id,
                          e.target.value,
                          e.target
                        )
                      }
                      min="1"
                      max="12"
                      disabled={locked}
                    />
                  </td>
                ))}
                <td className="py-2 px-2 text-center font-semibold bg-gray-100">
                  {playerBackNineTotals.get(player.id) || ""}
                </td>
                <td className="py-2 px-2 text-center font-semibold bg-gray-200">
                  {playerTotals.get(player.id) || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scorecard; 