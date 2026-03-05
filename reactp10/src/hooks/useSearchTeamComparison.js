import { useContext } from "react";
import { SearchTeamComparisonContext } from "../context/SearchTeamComparisonContext";

export function useSearchTeamComparison() {

    const context = useContext(SearchTeamComparisonContext);

    if (!context) {
        throw new Error(
            "useSearchTeamComparison must be used within SearchTeamComparisonProvider"
        );
    }

    return context;
}