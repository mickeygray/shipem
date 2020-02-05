import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import CallContext from './callContext';
import CallReducer from './callReducer';
import {
  GET_CALLS,
  SET_NUMBER,
  CLEAR_NUMBER,
  GET_CALL
} from '../types';

const CallState = props => {
    const initialState = {
      calls: [],
      call: {},
      number: null,
      currentNumber: null
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
const getCall = async id => {
  const config = {
    headers: {
          'Authorization': 'Token token=6c0dbe4e525e0bff243007882b40eb2b'
          
        }
    };
    const res = await axios.get(`https://api.callrail.com/v3/a/423787543/calls/${id}.json`, config)
    
    dispatch({
      type: GET_CALL,
      payload: res.data
  });
  

const number = res.data.customer_phone_number;


}

  


const clearNumber = () => {
  dispatch({type : CLEAR_NUMBER })
}
   

    
    return (
        <CallContext.Provider
          value={{
            calls: state.calls,
            call: state.call,
            currentNumber: state.currentNumber,
            getCalls,
            getCall
    
    
          }}
        >
          {props.children}
        </CallContext.Provider>
      );
    }

    export default CallState;