import axios from 'axios';

import { LIST, SET_SHOWN } from '../types';

const list = cryptos => {
    return {
        type: LIST,
        list: cryptos
    }
}

export const fetchList = () => dispatch => {
        axios.get("/api")
        .then(response => dispatch(list(response.data.data)))
        .catch(err => console.log("ERROR: ",err))
    }

export const setNumber = number => {
    return {
        type: SET_SHOWN,
        number
    }
}