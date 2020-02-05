import {
    POST_LEAD,
    SET_LEAD
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case POST_LEAD:
        return {
            ...state,
            lead: action.payload
        };
        case SET_LEAD:
          return {
            ...state,
            lead: action.payload
          };
      default: 
       return state;


    }}