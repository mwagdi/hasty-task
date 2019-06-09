import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const options = [
    {
        value: 10
    },
    {
        value: 50
    },
    {
        value: null,
        text: "All"
    }
]

export default ({ setNumber }) => (
    <div className="topbar flex-container align-center">
        <div className="topbar__left flex-grow">
            <NavLink
             to="/"
             exact
             className="link"
             >Overview</NavLink>
            <NavLink
             to="/liquidity"
             className="link"
             >Liquidity</NavLink>
        </div>
        <div className="topbar__right">
            <Dropdown 
            placeholder="Select number of coins to show"
            onSelect={value => setNumber(value)}
            options={options} />
        </div>
    </div>
)
