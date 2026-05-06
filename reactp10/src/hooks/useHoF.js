import { useContext } from "react";
import { HoFContext } from "../context/HoFContext";

export function useHoF() {
    return useContext(HoFContext);
}