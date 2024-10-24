import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/elements/Navbar.jsx';
import Card from "./components/elements/Card.jsx";
import Footer from "./components/elements/Footer.jsx";
import Login from "./components/pages/Login.jsx";
import Data from "./components/elements/Data.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem('auth') === 'true';
        setIsLoggedIn(authStatus);
    }, []);

    return (
        <Router>
            <div>
                {isLoggedIn && <Navbar />}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/foods" element={isLoggedIn ? <Card /> : <Login />} />
                    <Route path="/patients" element={isLoggedIn ? <Data /> : <Login />} />
                </Routes>
                {isLoggedIn && <Footer />}
            </div>
        </Router>
    );
};

export default App;
