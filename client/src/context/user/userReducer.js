import {
    SET_RECENT,
    GET_LEADS,
    UPDATE_USER
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
        case SET_RECENT:
            return {
                ...state,
                recentLeads: action.payload
            }; 
            case GET_LEADS:
                return {
                  ...state,
                  leads: action.payload
                };
            case UPDATE_USER:
                return {
                  ...state,
                  users: state.users.map(user =>
                  user._id === action.payload._id ? action.payload : user
               )
            };             
            default: 
            
            return state;


    }}