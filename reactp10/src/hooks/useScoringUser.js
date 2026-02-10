import { useContext } from "react";
import { ScoringUserContext } from "../context/ScoringUserContext";

export function useScoringUser() {
    const context = useContext(ScoringUserContext);
    if (!context) throw new Error("useScoringUser must be used inside ScoringUserProvider");

    const {
        userScoring, 
        loading, 
        refreshUserScoring
    } = context;

    return {
        userScoring, 
        loading, 
        refreshUserScoring
    }
}