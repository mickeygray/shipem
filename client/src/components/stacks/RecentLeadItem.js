import React, { useContext } from 'react';
import LeadContext from '../../context/Lead/leadContext';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import AuthContext from '../../context/auth/authContext';


const RecentLeadItem = ({recentLead:{name, address, city, state, zip, plaintiff, amount, email, phone, cpa, filingStatus, compliant, ssn, note, closerid,_id}}) => {
    const { user } = useContext(AuthContext);
    const match = {name, address, city, state, zip, plaintiff, amount, email, phone, cpa, filingStatus, compliant, ssn, note, closerid,_id} 
    const { setRecentLead, getLead } = useContext(LeadContext);
    const { deleteRecentLead, recentLeads } = useContext(UserContext)



    
    const onClick = e =>{
        getLead(_id);
        setRecentLead(match);
    }

  
   

        return (
       
            <span className='bg-dark mx-1'><Link to={{pathname:`/leads/${_id}`,state:{match:true}}} onClick={onClick} className='btn btn-dark btn-sm'> {name}</Link><button className='bg-danger' style={{fontSize:'.7rem'}} onClick={()=>deleteRecentLead(recentLeads,match)}>X</button></span> 
     
        );
    
};

export default RecentLeadItem