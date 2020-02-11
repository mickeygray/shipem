import React, { useContext } from 'react';
import LeadContext from '../../context/lead/leadContext';
import { Link } from 'react-router-dom';


const LeadItem = ({lead:{name, plaintiff, amount, phone, email, _id, compliant, filingStatus, cpa }}) => {


    const leadContext = useContext(LeadContext);

    const { getLead } = leadContext;
    const onClick = e =>{
        getLead(_id);
    }

        
        return (
        
        <div className="card bg-white">
                
        <h5> <span>{name}</span> <span style={{ float: 'right' }}> <Link to={`/lead/${_id}`} onClick={onClick} className='btn btn-dark btn-sm my-1'>View Lead</Link></span> </h5>    
                
                
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