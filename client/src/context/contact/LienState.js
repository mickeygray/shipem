import React, { useReducer } from 'react';
import axios from 'axios';
import LienContext from './lienContext';
import LienReducer from './lienReducer';
import {
  SEARCH_LIENS,
  CLEAR_LIENS,
  DELETE_LIEN
} from '../types';

const LienState = props => {
  const initialState = {
    liens: [],
    lien: {}
  };

  const [state, dispatch] = useReducer(LienReducer, initialState);
  
 //Search Liens
  const searchLiens = async text => {
  
    const res = await axios.get(`/api/liens?q=${text}`);

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



    // Clear Liens
    const clearLiens = () => {
      dispatch({ type: CLEAR_LIENS });
    };
  


  return (
    <LienContext.Provider
      value={{
        liens: state.liens,
        lien: state.lien,
        current: state.current,
        searchLiens,
        clearLiens,
        deleteLien


      }}
    >
      {props.children}
    </LienContext.Provider>
  );
};

export default LienState;