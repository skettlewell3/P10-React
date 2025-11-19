import { useState, useEffect } from 'react'
import { useDatabase } from "../hooks/useDatabase"

export function PredictionsProvider({ children }) {
    const { supabase } = useDatabase();

    const REFRESH_INTERVAL = 1000 * 60 * 30;

    return <>{children}</>

}