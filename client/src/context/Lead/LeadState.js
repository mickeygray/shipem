import React, { useReducer } from 'react';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';

import {
  SET_LEAD
} from '../types';

const LeadState = props => {
  const initialState = {
   lead: null

  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);
  
  
  


 const setLead = lead => {
  dispatch({ type: SET_LEAD, payload: lead });
};





 

  return (
    <LeadContext.Provider
      value={{
        leads: state.leads,
        lead: state.lead,
        setLead


      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;