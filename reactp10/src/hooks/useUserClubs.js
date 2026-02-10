import { useContext } from "react";
import { UserClubsContext } from "../context/UserClubsContext";

export function useUserClubs() {
    const context = useContext(UserClubsContext);

    if (!context) {
      throw new Error("useUserClubs must be used within UserClubsProvider");
    }

    const { 
        clubs, 
        loading, 
        error, 
        getClubById, 
        getDefaultClub,
        refreshUserMemberships
    } = context;
    
    return { 
        clubs, 
        loading, 
        error, 
        getClubById, 
        getDefaultClub,
        refreshUserMemberships
    };
}