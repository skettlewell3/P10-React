import { useGameweek } from "../hooks/useGameweeks";
import { useState, useEffect } from 'react';
import { useUserClubs } from "../hooks/useUserClubs";

export default function StateBootstrapper({ children }) {
  const { currentWeek, currentGwStatus, isLoading } = useGameweek();
  const { clubs, loading: clubsLoading, getDefaultClub } = useUserClubs();

  const [activeWeek, setActiveWeek] = useState(null);
  const [highlightedClub, setHighlightedClub] = useState(null);

  useEffect(() => {
    if (isLoading) return;
    if (activeWeek !== null) return;
    if (currentWeek === null) return;

    const initial = currentGwStatus === "submissionsOpen"
      ? currentWeek - 1
      : currentWeek;

    setActiveWeek(initial);
  }, [isLoading, currentWeek, activeWeek, currentGwStatus]);

  useEffect(() => {
    if (clubsLoading) return;
    if (!clubs?.length) return;

    setHighlightedClub(getDefaultClub()?.club_id);
  }, [clubsLoading, clubs, getDefaultClub]);

  if (isLoading || activeWeek === null || clubsLoading) {
    return <div className="loader">loading app...</div>;
  }

  return children({
    activeWeek,
    setActiveWeek,
    currentGwStatus,
    clubs,
    highlightedClub,
    setHighlightedClub,
  });
}
