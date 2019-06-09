import React from 'react';
import { connect } from 'react-redux';

const CoinContainer = ({ Component,coins }) => <Component coins={coins}  />

const mapStateToProps = state => {
    return {
        coins: state.crypto.shown
    }
}

export default connect(mapStateToProps)(CoinContainer);