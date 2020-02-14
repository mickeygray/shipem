import React, { useContext } from 'react';
import LeadContext from '../../context/lead/leadContext';
import { Link } from 'react-router-dom';
import { SET_RECENT } from '../../context/types';


const RecentLeadItem = ({recentLead:{name, address, city, state, zip, plaintiff, amount, email, phone, cpa, filingStatus, compliant, ssn, note, closerid,_id}}) => {
    
    const match = {name, address, city, state, zip, plaintiff, amount, email, phone, cpa, filingStatus, compliant, ssn, note, closerid,_id} 
    const { setRecentLead, getLead } = useContext(LeadContext);
    
    const onClick = e =>{
        getLead(_id);
        setRecentLead(match);
    }
   

        return (

            <Link to={{pathname:`/leads/${_id}`,state:{match:true}}} onClick={onClick} className='btn btn-dark btn-sm my-1'> {name}</Link>
   
        );
    
};

export default RecentLeadItem