import { useContext } from "react";
import { ScoringClubContext } from "../context/ScoringClubContext";

export function useScoringClub() {
    const ctx = useContext(ScoringClubContext);
    if (!ctx) throw new Error("useScoringClub must be used inside ScoringUserProvider");

    return {
        clubScoring: ctx.clubScoring, 
        loading: ctx.loading,
        refresh: ctx.loadClubScoring
    }
}