import {
    POST_LEAD,
    GET_CALL,
    GET_LEAD,
    GET_LEADS,
    UPDATE_LIEN,
    SET_CURRENT,
    CLEAR_LEAD,
    SEARCH_LIENS,
    DELETE_LIEN,
    CLEAR_LIENS,
    CLEAR_NUMBER,
    POST_LOGICS
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case POST_LEAD:
        return {
            ...state,
            lead: action.payload
        };
        case POST_LOGICS:
          return {
              ...state,
              lead: action.payload
          };
      case GET_CALL:
        return {
            ...state,
            number: action.payload
        };
        case GET_LEAD:
          return {
              ...state,
              lead: action.payload
          }; 
        case GET_LEADS:
          return {
            ...state,
            leads: action.payload
          }  
      case SET_CURRENT:
        return {
            ...state,
            lien: action.payload
        };
      case CLEAR_LEAD:
        return {
            ...state,
            lead: {}
        };
        case CLEAR_NUMBER:
          return {
              ...state,
              number: null
          }; 
        case SEARCH_LIENS:
            return {
                ...state,
                liens: action.payload
              
            };
        case DELETE_LIEN:
                return {
                  ...state,
                  liens: state.liens.filter(
                    lien => lien._id !== action.payload
                  )
                };
        case CLEAR_LIENS:
             return {
                ...state,
                liens: []                    
            };            
      case UPDATE_LIEN:
        return {
             ...state,
             liens: state.liens.map(lien =>
             lien._id === action.payload._id ? action.payload : lien
                )
                };              
      default: 
       return state;


    }}