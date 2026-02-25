import { useContext } from "react";
import { PremDataLeagueTableContext } from "../context/PremDataLeagueTableContext";

export function usePremLeagueTables() {
  const context = useContext(PremDataLeagueTableContext);

  if (!context) {
    throw new Error("usePremLeagueTable must be used inside PremDataLeagueTableProvider");
  }

  return context;
}