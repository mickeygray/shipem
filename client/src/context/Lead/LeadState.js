import React, { useReducer, useContext } from 'react';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import setAuthToken from '../../utils/setAuthToken'
import uuidv4 from 'uuid/v4'



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
  UPDATE_LEAD,
  CLEAR_LEADFIELDS,
  CLEAR_RECENTLEAD,
  SET_RECENTLEAD,
  SET_NOTES,
  SET_NOTE
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
   note:{},
   notes:[],
   text: '',
   number: null,
   claimedBy: 'unclaimed',
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
    
      const { phone, name, address, city, state, zip, plaintiff, amount, lienid, email, lexId, compliant, filingStatus, cpa, ssn, noteText } = lead
      

      const noteId = uuidv4();
  
      const notes = [{ id : noteId,
                       note : noteText,
                       notePostedBy: ''
                    }]  

      const steve = {phone, name, address, city, state, zip, plaintiff, amount, lienid, email, lexId, compliant, filingStatus, cpa, ssn, notes }
      console.log(lead,'1');
      console.log(steve,'1');
      const res = await axios.post('/api/leads/', steve, config);

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

   
    
   const { user } = useContext(AuthContext);

   
   const setClaim = async (user,lead) => {
    
    const _id = lead._id
    const claimedBy  = user.name;
    const isClaimed = true
    const leadFields = {claimedBy, isClaimed}

    updateLead(leadFields, _id);
    

  };

  const putNote = async (noteSpace1,user,lead) => {
    
    const _id = lead._id
    const noteId = uuidv4();
 
    const note =  { id : noteId,
                     note : JSON.stringify(noteSpace1),
                     notePostedBy: user.name
                  }

    
    
    const leadFields = {note}
    
    updateLead(leadFields, _id);
    
  };

  const setApproved = async (lead) => {
    
    const _id = lead._id
    const isApproved = true
    const leadFields = {isApproved}

    updateLead(leadFields, _id);
    

  };


  const setUnclaim = async (user,lead) => {
    
    const _id = lead._id
    const claimedBy  = 'unclaimed';
    const isClaimed = false
    const leadFields = {claimedBy, isClaimed}

    updateLead(leadFields, _id);
    
 
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

  const setNotes = notes => {
    dispatch({ type: SET_NOTES, payload: notes });
  };

  const setNote = note => {
    dispatch({ type: SET_NOTE, payload: note });
  };
  // Set Call in Ship Em Form
  const letCall = number => {
    
    dispatch({ type: LET_CALL, payload: number });
  };

  
  // get id and set name id value pair for recent array

  const getLead = async _id => {
    const res = await axios.get(`/api/leads/${_id}`);

    dispatch({
        type: GET_LEAD,
        payload: res.data
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

 // Update Lead
 const updateLead = async (leadFields, _id)=> {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/leads/${_id}`,
      leadFields,
      config
    );

    dispatch({
      type: UPDATE_LEAD,
      payload: res.data
    });

  } catch (err) {
    console.log(err)
  }
};


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
        note: state.note,
        notes: state.notes,
        calls: state.calls,
        number: state.number,
        searchLiens,
        clearLiens,
        addLead,
        setLien,
        clearLead,
        clearNumber,
        postLogics,
        getLeads,
        getLead,
        setRecentLead,
        clearLeadFields,
        clearRecentLead,
        letCall,
        setCalls,
        updateLead,
        setClaim,
        setUnclaim,
        setApproved,
        setNotes,
        setNote,
        putNote

      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;