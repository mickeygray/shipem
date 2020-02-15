import React, { useReducer, useContext } from 'react';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import setAuthToken from '../../utils/setAuthToken'
import { createBrowserHistory } from "history";

import {
  SET_CALLS,
  GET_LEAD,
  GET_LEADS,
  SET_LIEN,
  LET_CALL,
  SEARCH_LIENS,
  CLEAR_LIENS,
  POST_LEAD,
  CLEAR_LEAD,
  CLEAR_NUMBER,
  POST_LOGICS,
  SET_RECENT,
  CLEAR_LEADFIELDS,
  CLEAR_RECENTLEAD,
  SET_RECENTLEAD
} from '../types';


let logicsId;
let logicsPw;

if (process.env.NODE_ENV !== 'production') {
  logicsId = process.env.REACT_APP_LOGICS_ID;
  logicsPw = process.env.REACT_APP_LOGICS_PW;
} else {
  logicsId = process.env.REACT_APP_LOGICS_ID;
  logicsPw = process.env.REACT_APP_LOGICS_PW;
};


const LeadState = props => {
  const initialState = {
   liens: [],
   leads: [],
   lien:{},
   lead:{},
   call: {},
   calls:[],
   text: '',
   number: null,
   recentLeads: [],
  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);
  
  
  const setCalls = async phone => {
     
    const res = await axios.get(`/api/leads/calls?q=${phone}`);
    
    console.log(res.data);

    dispatch({
      type: SET_CALLS,
      payload: res.data
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

    const clearLeadFields = () => {
      dispatch({ type: CLEAR_LEADFIELDS });
    };

    const clearRecentLead = () => {
      dispatch({ type: CLEAR_RECENTLEAD });
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

const setRecentLead = recentLead => {
  dispatch({ type: SET_RECENTLEAD, payload: recentLead });
};

  // Set Lien in Ship Em Form
  const setLien = lien => {
    dispatch({ type: SET_LIEN, payload: lien });
  };
  
  // Set Call in Ship Em Form
  const letCall = number => {
    
    dispatch({ type: LET_CALL, payload: number });
  };

  
  // get id and set name id value pair for recent array

  const { user } = useContext(AuthContext);

  const getLead = async _id => {
  
    const res = await axios.get(`/api/leads/${_id}`);

    dispatch({
        type: GET_LEAD,
        payload: res.data
      });  

    }
  
  
    //populates lead form from recently viewed case
    const setRecent = match => {
      const prevLeads = user.prevLeads
      const history = createBrowserHistory(getLead);  
      const prevLead = history.location.pathname.slice(6);

      

      const setPrevious = () =>{
         return prevLeads.push(prevLead); 
      }  

       const [...spliceLeads] = prevLeads.splice(0,1,match,match);
       
       const distinct =  (value, index, self) => {
         return self.indexOf(value) === index;
       }

     const recentLeads =  prevLeads.filter(distinct).filter(e => typeof e !== 'string');
     const recentRoutes = prevLeads.filter(distinct).filter(e => typeof e !== 'object');

     dispatch({
      type: SET_RECENT,
      payload: recentLeads
    });  
      
  }  
      // Lead Seach in stacks
  const getLeads = async text => { 
    const config = {
      params: {
        q:`${text}`
      }
    };
    const res = await axios.get(`/api/leads`, config);
  
    const leads = res.data 

    dispatch({
      type: GET_LEADS,
      payload: leads
    });  
    

    
  }

  const getMyLeads = async text => { 
    
    const config = {
      params: {
       createdBy:`${user._id}`,
       claimedBy:`${user._id}`,
       q:`${text}`
      }
    };
    const res = await axios.get('/api/leads', config);
  
    const leads = res.data 

    dispatch({
      type: GET_LEADS,
      payload: leads
    });  
    

    
  }
/*
  const searchLeadDates = async text => { 
    
    const config = {
      params: {
       createdBy:`${user._id}`,
       claimedBy:`${user._id}`,
       q:`${text}`
      }
    };
    const res = await axios.get('/api/leads', config);
  
    const leads = res.data 

    dispatch({
      type: GET_LEADS,
      payload: leads
    });  
    
    console.log(res.data)
    console.log(leads)
    
  }  

  const searchLeadStatus = async text => { 
    
    const config = {
      params: {
       isClaimed:`${}`,
       isClosed:`${user._id}`,
       isPaid:`${text}`
      }
    };
    const res = await axios.get('/api/leads', config);
  
    const leads = res.data 

    dispatch({
      type: GET_LEADS,
      payload: leads
    });  
    
    console.log(res.data)
    console.log(leads)
    
  }
*/


   //post to logics
  const postLogics = async lead => {
    const config = {
      headers: {

         'Authorization':`Basic ${logicsId}|${logicsPw}`
          }
      };
    
    const { name, address, city, state, zip, plaintiff, amount, email, lexId, compliant, filingStatus, cpa, ssn, phone, note } = lead

    setAuthToken(null);

    const res = await axios.post(`https://nattax.irslogics.com/postLead.aspx?FNAME=${name}&&ADDRESS=${address}&&CITY=${city}&&ZIP=${zip}&&TAX_RELIEF_TAX_AMOUNT=${amount}&&CELL_PHONE=${phone}&&EMAIL=${email}&&NOTES=${plaintiff}`, config)
    
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
        call: state.call,
        calls: state.calls,
        number: state.number,
        recentLeads: state.recentLeads,
        searchLiens,
        clearLiens,
        addLead,
        setLien,
        clearLead,
        clearNumber,
        postLogics,
        getLeads,
        getLead,
        setRecent,
        setRecentLead,
        clearLeadFields,
        clearRecentLead,
        letCall,
        setCalls,
        getMyLeads

      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;