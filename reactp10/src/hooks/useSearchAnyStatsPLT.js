import { useContext } from "react";
import { SearchUserStatsPLTContext } from "../context/SearchUserStatsPLTContext";
import { SearchClubStatsPLTContext } from "../context/SearchClubStatsPLTContext";

export function useSearchAnyStatsPLT({ id, isTeam }) {
  const userContext = useContext(SearchUserStatsPLTContext);
  const clubContext = useContext(SearchClubStatsPLTContext);

  if (!userContext || !clubContext) {
    throw new Error(
      "useSearchStatsPLT must be used inside SearchUserStatsPLTProvider and SearchClubStatsPLTProvider"
    );
  }

  const {
    userPLTById,
    loadingById: userLoadingById,
    fetchUserPLT
  } = userContext;

  const {
    clubPLTById,
    loadingById: clubLoadingById,
    fetchClubPLT
  } = clubContext;

  const tableById = isTeam ? clubPLTById : userPLTById;
  const loadingById = isTeam ? clubLoadingById : userLoadingById;
  const fetchPLT = isTeam ? fetchClubPLT : fetchUserPLT;

  return {
    predictedLeagueTable: id ? tableById[id] : null,
    loading: id ? (loadingById[id] ?? false) : false,
    fetchPLT
  };
}