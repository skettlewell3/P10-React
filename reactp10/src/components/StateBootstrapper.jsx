import { useGameweek } from "../hooks/useGameweeks";
import { useState, useEffect } from "react";
import { useUserClubs } from "../hooks/useUserClubs";

export default function StateBootstrapper({ children }) {
  const { currentWeek, currentGwStatus, isLoading } = useGameweek();
  const { clubs, loading: clubsLoading, getDefaultClub } = useUserClubs();

  const [activeWeek, setActiveWeek] = useState(null);
  const [highlightedClub, setHighlightedClub] = useState(null);

  useEffect(() => {
    if (isLoading || currentWeek == null) return;

    const derivedWeek =
      currentGwStatus === "submissionsOpen"
        ? currentWeek - 1
        : currentWeek;

    setActiveWeek(derivedWeek);
  }, [isLoading, currentWeek, currentGwStatus]);

  useEffect(() => {
    if (clubsLoading || !clubs?.length) return;

    const defaultClub = getDefaultClub()?.club_id ?? null;
    setHighlightedClub(defaultClub);
  }, [clubsLoading, clubs, getDefaultClub]);

  if (isLoading || clubsLoading || activeWeek == null) {
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
