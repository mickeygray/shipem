import {
    GET_CALLS,
    SEND_CALL
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case GET_CALLS:
        return {
            ...state,
            calls: action.payload
        };
      case SEND_CALL:
        return {
          ...state,
          call: action.payload
        };  
      default: 
       return state;


    }}