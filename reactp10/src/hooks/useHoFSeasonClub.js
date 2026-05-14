import { useContext } from "react";
import { HoFSeasonClubContext } from "../context/HoFSeasonClubContext";

export function useHoFSeasonClub() {
    return useContext(HoFSeasonClubContext);
}