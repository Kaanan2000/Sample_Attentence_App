import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
    const isLoggedIn = !!localStorage.getItem('token');
    console.log(isLoggedIn);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
            </Routes>
        </Router>
    );
}

export default App;
