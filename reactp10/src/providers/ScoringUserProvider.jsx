import { useState, useEffect } from "react";
import { ScoringUserContext } from "../context/ScoringUserContext";
import { useDatabase } from "../hooks/useDatabase";


export function ScoringUserProvider({ userId, children }) {
    const { supabase } = useDatabase();
    const [userScoring, setUserScoring] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId || !supabase){
            setUserScoring([]);
            setLoading(false);
            return;
        } 

        async function loadUserScoring() {
            setLoading(true);

            try {
                const { data, error } = await supabase.rpc("get_user_scoring_all", {
                    p_user_id: userId,
                });

                if (error) throw error;

                setUserScoring(data || []);
                //console.log('UserScoringProvider:', data);
            } catch (err) {
                console.error("USER SCORING PROVIDER ERROR:", err.message);
                setUserScoring([]);
            } finally {
                setLoading(false);
            }
        }

        loadUserScoring();
    }, [supabase, userId]);

    return (
        <ScoringUserContext.Provider value={{ userScoring, loading}}>
            {children}
        </ScoringUserContext.Provider>
    );
}