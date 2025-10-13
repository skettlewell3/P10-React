import { useState } from 'react'

export default function LoginFormTemp( {onLogIn} ) {
    const [name, setName] = useState("");

    const handleLoginClick = () => {
        if (!name) return alert('Please enter your name');

        const user = {
            id: name.toLowerCase().replace(/\s/g, '_'),
            name: name
        };

        onLogIn(user);
    };

    return (
        <div id="loginContainer">
            <h2>Welcome to Perfect10</h2>
            <input 
                type="text" 
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleLoginClick}>
                Log in
            </button>
        </div>
    )
}