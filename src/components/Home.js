import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            <Navbar />
            <div className="home-container">
                <div className="stocks-section">

                    <h2>Тут будет список акций</h2>
                </div>
                <div className="graph-section">

                    <h2>Тут будет график</h2>
                </div>
                <div className="trading-section">

                    <h2>Тут будет блок с заявками</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
