import { useState, useEffect } from 'react'
import LoginFormTemp from './LoginFormTemp';

export default function AuthGate( { children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    const handleLogin = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    if (!user) {
        return <LoginFormTemp onLogIn={handleLogin} />
    }

    return (
        <>
            {children(user, handleLogout)}
        </>
    );
}