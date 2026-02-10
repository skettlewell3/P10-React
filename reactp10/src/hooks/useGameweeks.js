import { useContext } from "react";
import { GameweekContext } from "../context/GameweekContext";

export function useGameweek() {
  const {
    currentWeek,
    currentGwStatus,
    isLoading,
    refreshGameweek
  } = useContext(GameweekContext);

  return {
    currentWeek,
    currentGwStatus,
    isLoading,
    refreshGameweek
  };
}
