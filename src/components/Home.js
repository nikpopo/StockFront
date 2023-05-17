import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css';

function Home({ onLogout }) {
    return (
        <div className="home">
            <Navbar onLogout={onLogout} />
        </div>
    );
}

export default Home;