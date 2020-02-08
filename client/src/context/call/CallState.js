import React, { useReducer } from 'react';
import axios from 'axios';
import CallContext from './callContext';
import CallReducer from './callReducer';
import {
  GET_CALLS,
  SEND_CALL,
} from '../types';

const CallState = props => {
    const initialState = {
      calls: [],
      call: {},
      number: null
    };

const [state, dispatch] = useReducer(CallReducer, initialState);

const getCalls = async () => {
  const config = {
      headers: {
            'Authorization': 'Token token=6c0dbe4e525e0bff243007882b40eb2b'
            
          }
      };
      const res = await axios.get(`https://api.callrail.com/v3/a/423787543/calls.json`, config)
      
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


      
    
    return (
        <CallContext.Provider
          value={{
            calls: state.calls,
            call: state.call,
            currentNumber: state.currentNumber,
            getCalls,
            sendCall

    
    
          }}
        >
          {props.children}
        </CallContext.Provider>
      );
    }

    export default CallState;