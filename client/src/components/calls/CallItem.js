import React, { useContext } from 'react';
import CallContext from '../../context/call/callContext';



const CallItem = ({call:{answered, customer_city, customer_name, customer_phone_number, customer_state, id }}) => {
      

       const { getCall, setNumber, currentNumber } = useContext(CallContext);
    

        
        return (
        <div className="card text-center">
                
                <h3>{answered ? 'Answered' : 'New Call'} </h3>
                <p><strong>{customer_name}</strong></p>
                <ul>
                    <li>{customer_city}</li>
                    <li>{customer_state}</li>
                    <li>{customer_phone_number}</li>
                </ul>
            <div>
            <input
          type='submit'
          value= 'This is my call'
          className='btn btn-dark btn-sm'
          onClick = {  () => getCall(id) }
        />

            </div>
        </div>
        );
    
};

export default CallItem