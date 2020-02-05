import {
    GET_CALLS,
    GET_CALL,
    SET_NUMBER,
    CLEAR_NUMBER
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case GET_CALLS:
        return {
            ...state,
            calls: action.payload
        };
      case GET_CALL:
        return {
          ...state,
          id: action.payload
        } 

      case CLEAR_NUMBER:
        return {
          ...state,
          number: null
        };  
      default: 
       return state;


    }}