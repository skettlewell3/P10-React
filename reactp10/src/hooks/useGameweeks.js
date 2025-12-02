import { useContext } from "react";
import { GameweekContext } from "./GameweekContext";

export function useGameweek() {
  return useContext(GameweekContext);
}
