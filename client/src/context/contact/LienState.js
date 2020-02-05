import React, { useReducer } from 'react';
import axios from 'axios';
import LienContext from './lienContext';
import LienReducer from './lienReducer';
import {
  SEARCH_LIENS,
  SET_CURRENT
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


const setCurrent = lien => {
  dispatch({ type: SET_CURRENT, payload: lien });
};



 

  return (
    <LienContext.Provider
      value={{
        liens: state.liens,
        lien: state.lien,
        searchLiens,
        setCurrent


      }}
    >
      {props.children}
    </LienContext.Provider>
  );
};

export default LienState;