import React from 'react';

export default ({ coins }) => (
    <div className="table-container">
        <table>
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Price Change (24h)</th>
                    <th>Market Cap</th>
                    <th>Volume (24h)</th>
                </tr>
                {coins.map((coin,i) => (
                    <tr key={i}>
                        <td>{coin.cmc_rank}</td>
                        <td>{coin.name}</td>
                        <td>${coin.quote.USD.price}</td>
                        <td>{coin.quote.USD.percent_change_24h}%</td>
                        <td>${coin.quote.USD.market_cap}</td>
                        <td>${coin.quote.USD.volume_24h}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)