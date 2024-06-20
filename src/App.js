
import React, { useState } from 'react';
import Login from './Login';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (email) => {
        setUser(email);
    };

    return (
        <div>
            {user ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Welcome, {user}!</h1>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;

