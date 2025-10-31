import { useContext } from "react";
import { FixtureContext } from '../context/FixturesContext.jsx'

export function useFixtures() {
    return useContext(FixtureContext);
}