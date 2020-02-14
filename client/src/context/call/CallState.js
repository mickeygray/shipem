import React, { useReducer } from 'react';
import axios from 'axios';
import CallContext from './callContext';
import CallReducer from './callReducer';
import {
  GET_CALLS,
  SEND_CALL,
  FILTER_CALLS,
  CLEAR_FILTER
} from '../types';

let callRailKey;


if (process.env.NODE_ENV !== 'production') {
  callRailKey = process.env.REACT_APP_CALL_RAIL_KEY;
} else {
  callRailKey = process.env.REACT_APP_CALL_RAIL_KEY;
};

const CallState = props => {
    const initialState = {
      calls: [],
      call: {},
      filtered: null
    };

const [state, dispatch] = useReducer(CallReducer, initialState);

const getCalls = async () => {
  

  
  const config = {
      
      headers: {
            'Authorization': `Token token=${callRailKey}`
            
          }
      };
      const res = await axios.get(`https://api.callrail.com/v3/a/423787543/calls.json?fields=answered,first_call,formatted_customer_name,duration,recording_player,start_time,total_calls,source_name,formatted_customer_phone_number,customer_city,customer_name,customer_phone_number,customer_state,start_time,id,tracking_phone_number`, config)
      
      dispatch({
          type: GET_CALLS,
          payload: res.data.calls
      });
}; 



const sendCall = async call => {
  const config = {
    headers: {
          'Content-Type': 'application/json'
          
        }
    };
  const res = await axios.post('/api/leads/calls', call, config);
  dispatch({
    type: SEND_CALL,
    payload: res.data
});

};
//Filter Calls
const filterCalls = text => {
  dispatch({ type: FILTER_CALLS, payload: text });
};

// Clear Filter
const clearFilter = () => {
  dispatch({ type: CLEAR_FILTER });
};
      
    
    return (
        <CallContext.Provider
          value={{
            calls: state.calls,
            call: state.call,
            filtered: state.filtered,
            getCalls,
            sendCall,
            filterCalls,
            clearFilter

    
    
          }}
        >
          {props.children}
        </CallContext.Provider>
      );
    }

    export default CallState;