import React, { useContext, useState } from 'react';
import CallItem from './CallItem';
import CallContext from '../../context/call/callContext';
import useRecursiveTimeout from '../../utils/useRecursiveTimeout';

const Calls = () => {
  
  const callContext = useContext(CallContext);

  const { calls, getCalls } = callContext;

  

  useRecursiveTimeout(
    () =>
      new Promise(r => {
        getCalls(calls);
        r();
      }),
    7000
  );



  return (
    <div>
    {calls.map(call => (
      <CallItem key={call.id} call={call} />
    ))}
  </div>
  );
  }



export default Calls;
