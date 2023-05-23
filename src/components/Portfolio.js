import React, { useState, useEffect } from "react";
import axios from "axios";

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState({
        equity: 123,
        balance: 0,
        positions: [],
        currencies: [],
        money: [],
    });

    const fetchPortfolio = () => {
        axios
            .get("api/portfolio", {
                params: {
                    includeCurrencies: true,
                    includeMoney: true,
                    includePositions: true,
                    includeMaxBuySell: true,
                },
            })
            .then((response) => {
                setPortfolio(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    useEffect(() => {
        console.log(portfolio);
    }, [portfolio]);

    return (
        <div>
            <h1>Portfolio</h1>
            <button onClick={fetchPortfolio}>fetch</button>
            <p>eq: {portfolio.equity}</p>
            <p>bl: {portfolio.balance}</p>
            <p>pos: {portfolio.positions}</p>
            <p>currs: {portfolio.currencies}</p>
            <p>mn: {portfolio.money}</p>
        </div>
    );
};

export default Portfolio;
