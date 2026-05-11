import { useContext } from "react";
import { HoFClubContext } from "../context/HoFClubContext";

export function useHoFClub() {
    return useContext(HoFClubContext);
}