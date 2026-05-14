import { useContext } from "react";
import { HoFUserSeasonContext } from "../context/HoFUserSeasonContext";

export function useHoFSeasonUser() {
    return useContext(HoFUserSeasonContext);
}