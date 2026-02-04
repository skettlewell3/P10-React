import { useContext } from "react";
import { FixtureContext } from '../context/FixturesContext.jsx';

export function useFixtures() {
    const { fixtures, loading, fetchFixtures } = useContext(FixtureContext);
    return { fixtures, loading, fetchFixtures };
}
