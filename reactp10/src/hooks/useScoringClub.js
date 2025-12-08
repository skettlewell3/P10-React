import { useContext } from "react";
import { ScoringClubContext } from "../context/ScoringUserContext";

export function useSCoringClub() {
    const ctx = useContext(ScoringClubContext);
    if (!ctx) throw new Error("useScoringClub must be used inside ScoringUserProvider");

    return {
        clubScoring: ctx.clubScoring, 
        loading: ctx.loading
    }
}