import { combineReducers } from 'redux';
import { cryptoReducer as crypto } from './cryptocurrency';

export default combineReducers({
    crypto
})