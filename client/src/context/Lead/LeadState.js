import React, { useReducer, useContext } from 'react';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import setAuthToken from '../../utils/setAuthToken'


import {
  GET_CALL,
  GET_LEAD,
  GET_LEADS,
  SEARCH_LIENS,
  DELETE_LIEN,
  CLEAR_LIENS,
  SET_CURRENT,
  POST_LEAD,
  CLEAR_LEAD,
  CLEAR_NUMBER,
  POST_LOGICS
} from '../types';
import { set } from 'mongoose';

const LeadState = props => {
  const initialState = {
   liens: [],
   leads: [],
   lien:{},
   lead:{},
   call: {},
   text: '',
  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);
  

  const getCall = async () => {
     
    const call = await axios.get('/api/leads/calls');
    
    const [currentCall] = call.data;

    const { formatted_customer_phone_number , callid } = currentCall

    const number = formatted_customer_phone_number
    
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


      const res = await axios.post('/api/leads/', lead, config);

      dispatch({
        type: POST_LEAD,
        payload: res.data
      });
  };
     // Clear Liens
     const clearLead = () => {
      dispatch({ type: CLEAR_LEAD });
    };


    const clearNumber = () => {
      dispatch({ type: CLEAR_NUMBER });
    };


  //Search Liens
  const searchLiens = async text => {

    const res = await axios.get(`/api/liens?name=${text}`);
    

    dispatch({
      type: SEARCH_LIENS,
      payload: res.data
    });


};

  // Delete Contact
  const deleteLien = async id => {
    try {
      await axios.delete(`/api/liens/${id}`);

      dispatch({
        type: DELETE_LIEN,
        payload: id
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Set Current Contact
  const setLien = lien => {

    dispatch({ type: SET_CURRENT, payload: lien });
  };

  const getLead = async _id => {
  
    const res = await axios.get(`/api/leads/${_id}`);
    
    dispatch({
      type: GET_LEAD,
      payload: res.data
    });  
  }


  const getLeads = async text => {
  
    const res = await axios.get(`/api/leads?q=${text}`);
  
    const leads = res.data 
  
    
    dispatch({
      type: GET_LEADS,
      payload: leads
    });  
    
    console.log(leads);
    
  }

  const postLogics = async lead => {
    const config = {
      headers: {

         'Authorization':'Basic mgray@nattaxexperts.com|qw12as34',
         'Content-Type': 'null'
          }
      };
    

    //getLead(lead);
     


    setAuthToken(null);
    
    const {record, call, open, notes}  = lead

  const { name, address, city, state, zip, plaintiff, amount } = record
    const { phone } = call
    const { email, lexId, compliant, filingStatus, cpa, ssn } = open
    const { note } = notes

    const res = await axios.post(`https://nte.irslogics.com/postLead.aspx?FNAME=${name}&&ADDRESS=${address}&&CITY=${city}&&ZIP=${zip}&&TAX_RELIEF_TAX_AMOUNT=${amount}&&CELL_PHONE=${phone}&&EMAIL=${email}&&NOTES=${plaintiff}`, config)
    
    console.log(record);
    
    console.log(res.data);
    dispatch({
      type: POST_LOGICS,
      payload: res.data
    });



  }
    // Clear Liens
    const clearLiens = () => {
      dispatch({ type: CLEAR_LIENS });
    };
  
  return (
    <LeadContext.Provider
      value={{
        liens: state.liens,
        lien: state.lien,
        leads: state.leads,
        lead: state.lead,
        number: state.number,
        searchLiens,
        clearLiens,
        deleteLien,
        addLead,
        getCall,
        setLien,
        clearLead,
        clearNumber,
        postLogics,
        getLeads,
        getLead


      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;