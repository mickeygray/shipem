import {
    POST_LEAD,
    GET_CALL
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case POST_LEAD:
        return {
            ...state,
            lead: action.payload
        };
        case GET_CALL:
          return {
              ...state,
              number: action.payload
          }; 

      default: 
       return state;


    }}