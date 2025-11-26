import { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useDatabase } from "../hooks/useDatabase"; 

export function UserProvider({ children }) {
  const { supabase: db } = useDatabase(); // get Supabase client from DatabaseProvider
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const handleLogin = async (loginData) => {
    const { data, error } = await db
      .from("beta_users")
      .select("*")
      .eq("name", loginData.name)
      .eq("pin_code", loginData.pin)
      .single();

    if (error || !data) {
      throw new Error("Invalid login");
    }

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (loading) return null;

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}
