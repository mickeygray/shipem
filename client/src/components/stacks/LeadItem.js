import React, { useContext, useEffect, } from 'react';
import LeadContext from '../../context/Lead/leadContext';
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';


const LeadItem = ({lead}) => {
    const {name, plaintiff, address, city, state, zip, amount, phone, email, _id, compliant, filingStatus, cpa, notes, tasks, closerid, lexId, ssn, isClaimed, isClosed, isPaid } = lead
    
    
    const match = lead  
    const leadContext = useContext(LeadContext);
    const userContext = useContext(UserContext);

    const { getLead } = leadContext;
    const { setRecent }  = userContext;   

    const onClick = e =>{
        getLead(_id);
        setRecent(match);
    }

        
        return (
        
        <div className="card bg-white">
                
        <h5> <span>{name}</span> <span style={{ float: 'right' }}> <Link to={`/leads/${_id}`} onClick={onClick} className='btn btn-dark btn-sm my-1'>View Lead</Link></span> </h5>    
                
                
                <div className="leadul">    
                <p className='leaditem'><strong>Phone{' '}</strong> <br/>{' '} {phone}</p>
                <p></p>
                <p className='leaditem'><strong>Email{' '}</strong> <br/>{' '}{email}</p>
                </div> 
       
                <br/>  
                
            <div className='grid-2'>

                <p className='leaditem'><strong>Plaintiff</strong> <br/>{plaintiff}</p>
                <p className='leaditem'><strong>Amount Owed</strong> <br/>${amount}.00</p>
                <p className='leaditem'><strong>Filing Status</strong> <br/>{compliant}</p>
                <p className='leaditem'><strong>Marital Status</strong> <br/>{filingStatus}</p>
                <p className='leaditem'><strong>CPA</strong> <br/>{cpa}</p>
            </div>
        </div>
        );
    
};

export default LeadItem