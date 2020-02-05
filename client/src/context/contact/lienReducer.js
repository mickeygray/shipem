import {
    SEARCH_LIENS,
    SET_CURRENT
  } from '../types';

  export default (state,action) => {
      switch(action.type) {
        case SEARCH_LIENS:
            return {
                ...state,
                liens: action.payload
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
                 default:
               return state;
      }
  }