import { useState, useEffect } from "react";
import { UserClubsContext } from "../context/UserClubsContext";
import { useUser } from "../hooks/useUser";

export function UserClubsProvider({ children }) {
    const { user } = useUser();
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!user?.user_id) {
            setClubs([]);
            setLoading(false);
            return;
        }

        const fetchUserClubs = async () => {
            setLoading(true);
            try {
                const res = await fetch("/.netlify/functions/get_users_clubs", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user_id: user.user_id }),
                });
            
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err?.error || "Failed to fetch clubs");
                }

                const data = await res.json();
                setClubs(Array.isArray(data) ? data : data.clubs ?? []);
            } catch (err) {
                console.error("Error fetching users Clubs", err);
                setError(err.message);
                setClubs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchUserClubs();
    }, [user?.user_id]);

    //Utility to get a club data by club_id
    const getClubById = (id) => clubs.find((c) => c.club_id === id);

    const getDefaultClub = () => {
        if (clubs.length === 0) return null;

        const owned = clubs.find(c => c.role === 'owner');
        if (owned) return owned;

        return clubs[0];
    }

    return (
        <UserClubsContext.Provider value={{ clubs, loading, error, getClubById, getDefaultClub }}>
            {children}
        </UserClubsContext.Provider>
    );
}
