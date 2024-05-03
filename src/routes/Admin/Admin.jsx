import React, { useState } from 'react';
import './admin.css';
import { NavLink } from "react-router-dom";

const Admin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        if (username === 'admin' && password === 'password') {
            setError('')
            setIsLoggedIn(true)
        } else {
            setError('Incorrect username or password!')
        }
    }

    return (
        <div className='admin-page-container'>
            {!isLoggedIn ? (
                <section className="login-container">
                    <div className='top-corner'>
                        <button><NavLink to="/">Back</NavLink></button>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='row1'>
                            <label htmlFor="username">Username</label>
                            <input id='username' type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className='row2'>
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='Loggin-btn'>Login</button>
                        {error && <div className="error-message">{error}</div>}
                    </form>
                </section>
                
            ) : (
                <button className="redirect-link"><NavLink to="/product-edit" >Go to Admin</NavLink></button>
            )}
        </div>
    );
}

export default Admin;
