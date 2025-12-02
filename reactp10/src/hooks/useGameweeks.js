import { useContext } from "react";
import { GameweekContext } from "../context/GameweekContext";

export function useGameweek() {
  return useContext(GameweekContext);
}
