import React from 'react';
import CoinContainer from '../containers/CoinContainer';
import CoinTable from '../components/CoinTable';

export default () => (
    <React.Fragment>
        <CoinContainer Component={CoinTable} />
    </React.Fragment>
)