import { useContext } from "react";
import { ScoringUserContext } from "../context/ScoringUserContext";

export function useSCoringUser() {
    const ctx = useContext(ScoringUserContext);
    if (!ctx) throw new Error("useScoringUser must be used inside ScoringUserProvider");

    return {
        userScoring: ctx.userScoring, 
        loading: ctx.loading
    }
}