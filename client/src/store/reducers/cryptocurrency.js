import { LIST, SET_SHOWN } from '../types';

const initialState = {
    total: [],
    shown: [],
}

export const cryptoReducer = (state=initialState, action) => {
    switch (action.type) {
        case LIST:
            return {
                total: action.list,
                shown: action.list,
            };
        
        case SET_SHOWN:
            return {
                ...state,
                shown: action.number ? state.total.slice(0,action.number) : state.total
            }

        default:
            return state;
    }
}