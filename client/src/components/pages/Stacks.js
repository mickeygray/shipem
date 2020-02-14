import React, { useContext } from 'react';
import LeadsSearch from '../stacks/LeadsSearch';
import Leads from '../stacks/Leads';
import LeadContext from '../../context/lead/leadContext';




const Stacks = () => {
 const  leadContext  = useContext(LeadContext)



    /*
    <div className='card'> 
    <h3 className='text-danger text-center'> Call Log </h3>
        <Filter />
        <Calls/>
    </div>

*/


    return (     
        
        <div>

            <div>  
            <LeadsSearch />
    
            </div>
            <div>
            
            <Leads />
 
            </div>
  

        </div>
   
        
    )
}

export default Stacks
