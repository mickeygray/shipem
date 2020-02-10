import {
    SEARCH_LIENS,
    CLEAR_LIENS,
    DELETE_LIEN
  } from '../types';

  export default (state,action) => {
      switch(action.type) {
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
 
            default: 
            return state;

      }
  }