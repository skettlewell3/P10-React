import { useContext } from "react";
import { ScoringClubContext } from "../context/ScoringClubContext";

export function useScoringClub() {
    const context = useContext(ScoringClubContext);
    if (!context) throw new Error("useScoringClub must be used inside ScoringClubProvider");

    const {
        clubScoring, 
        loading,
        refreshClubScoring
    } = context;

    return {
        clubScoring, 
        loading,
        refreshClubScoring
    } 
}