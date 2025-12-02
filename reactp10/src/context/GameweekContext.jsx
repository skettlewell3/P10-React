import { createContext } from "react";

export const GameweekContext = createContext({
    currentWeek: null,
    currentGwStatus: null,
    isLoading: true,
    refresh: () => {},
});