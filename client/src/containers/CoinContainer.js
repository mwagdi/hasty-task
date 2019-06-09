import React from 'react';
import { connect } from 'react-redux';

const CoinContainer = ({ Component, ...props }) => <Component {...props} />;

const mapStateToProps = state => {
  return {
    coins: state.crypto.shown
  };
};

export default connect(mapStateToProps)(CoinContainer);
