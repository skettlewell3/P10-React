import { useState } from 'react'
import { supabase } from '../../supbaseClient'

export default function BetaLoginForm( {onLogIn} ) {
    const [name, setName] = useState("");
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");

    const handleLoginClick = async() => {
        if (!name || !pin) return alert('Please enter both name and pin');

        const {data, error} = await supabase
            .from('beta_users')
            .select('*')
            .eq('name', name)
            .eq('pin_code', pin)
            .single();

        if (error || !data) {
            setError('Invalid name or PIN');
            return;
        }

        onLogIn(data);
    };

    return (
        <div id="loginContainer">
            <img src="/assets/logos/FullLogo_Transparent_NoBuffer.png" alt="logo" />
            {error && <p style={{ color: "red"}}>{error}</p>}
            <input 
                type="text" 
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input 
                type="password"
                placeholder='Enter your PIN'
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                pattern="\d{4}"
                maxLength={4}
                inputMode='numeric'
                required
            />
            <button onClick={handleLoginClick}>
                Log in
            </button>
        </div>
    )
}