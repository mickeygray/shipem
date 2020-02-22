import {
    POST_LEAD,
    SET_CALLS,
    GET_LEAD,
    GET_LEADS,
    CLEAR_LEAD,
    SET_LIEN,
    LET_CALL,
    SEARCH_LIENS,
    DELETE_NOTE,
    CLEAR_LIENS,
    CLEAR_NUMBER,
    SET_NOTES,
    POST_LOGICS,
    GET_FIELDS,
    POST_PREV,
    SET_RECENT,
    SET_RECENTLEAD,
    CLEAR_LEADFIELDS,
    CLEAR_RECENTLEAD,
    UPDATE_LEAD,
    SET_NOTE
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case POST_LEAD:
        return {
            ...state,
            lead: action.payload
        };
        case SET_RECENT:
          return {
              ...state,
              recentLeads: action.payload
          };
          case SET_NOTE:
            return {
                ...state,
                note: action.payload
            };     
      case POST_PREV:
        return {
            ...state,
           lead: action.payload
        }; 
        case POST_LOGICS:
          return {
              ...state,
              lead: action.payload
          };
      case SET_CALLS:
        return {
            ...state,
            calls : action.payload
        };
        case SET_RECENTLEAD:
          return {
              ...state,
              recentLead : action.payload
          };
          case SET_NOTES:
            return {
                ...state,
                notes: action.payload
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
          }; 
        case GET_FIELDS:
          return {
            ...state,
              lead: action.payload
            };  
      case SET_LIEN:
        return {
            ...state,
            lien: action.payload
        };
      case LET_CALL:
          return {
              ...state,
              number: action.payload
          };  
      case CLEAR_LEAD:
        return {
            ...state,
            lead: {}
        };
        case CLEAR_LEADFIELDS:
          return {
              ...state,
              leadfields: {}
          };
          case CLEAR_RECENTLEAD:
            return {
                ...state,
                recentLead: {}
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
        case DELETE_NOTE:
            return {
                ...state,
                notess: state.notes.filter(
                  note => note._id !== action.payload
                )
            };      
        case CLEAR_LIENS:
             return {
                ...state,
                liens: []                    
            }; 
    case UPDATE_LEAD:
      return {
        ...state,
        leads: state.leads.map(lead =>
          lead._id === action.payload._id ? action.payload : lead
        )
      };               
       
      default: 
       return state;


    }}