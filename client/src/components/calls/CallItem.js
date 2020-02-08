import React, { useContext } from 'react';
import CallContext from '../../context/call/callContext';
import LeadContext from '../../context/Lead/leadContext';



const CallItem = ({call:{answered, customer_city, customer_name, customer_phone_number, customer_state, start_time, id, tracking_phone_number }}) => {
       
       const call = {answered, customer_city, customer_name, customer_phone_number, customer_state, start_time, id, tracking_phone_number };

       const { sendCall } = useContext(CallContext);
       const { getCall, number } = useContext(LeadContext);
       const onClick = e => {
           sendCall(call);
           getCall(number);
       }


        
        return (
        <div className="card text-center">
                
                <h3>{answered ? `Answered at ${start_time}` : 'New Call'} </h3>
                <p><strong>{customer_name}</strong></p>
                <ul>
                    <li>{customer_city}</li>
                    <li>{customer_state}</li>
                    <li>{customer_phone_number}</li>
                </ul>
            <div>

            <input
          type='submit'
          value= 'This is my Call'
          className='btn btn-dark btn-sm'
          onClick = {onClick}
        />



            </div>
        </div>
        );
    
};

export default CallItem