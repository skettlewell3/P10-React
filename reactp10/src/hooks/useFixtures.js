import { useContext } from "react";
import { FixtureContext } from '../context/FixturesContext.jsx';

export function useFixtures() {
    const { fixtures, loading, refreshFixtures } = useContext(FixtureContext);
    return { fixtures, loading, refreshFixtures };
}
