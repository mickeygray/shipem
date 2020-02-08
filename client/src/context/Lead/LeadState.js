import React, { useReducer } from 'react';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';
import axios from 'axios';

import {
  GET_CALL,
  POST_LEAD
} from '../types';

const LeadState = props => {
  const initialState = {
   lead: {},
   call: {},
   number: null

  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);
  

  const getCall = async () => {
    
    
    const call = await axios.get('/api/leads/calls');
    
    const [currentCall] = call.data;
    
    const { customer_phone_number } = currentCall;

    const number = customer_phone_number;

    dispatch({
      type: GET_CALL,
      payload: number
    });    
    
}
   
   


  const addLead = async lead => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };


      const res = await axios.post('/api/leads', lead, config);

      dispatch({
        type: POST_LEAD,
        payload: res.data
      });

     console.log(lead);
  };


 

  return (
    <LeadContext.Provider
      value={{
        lead: state.lead,
        number: state.number,
        addLead,
        getCall


      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;