import React, { useContext } from 'react';
import LeadsSearch from '../stacks/LeadsSearch';
import Leads from '../stacks/Leads';
import LeadContext from '../../context/Lead/leadContext';




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
          <h1 className='text-danger'>Stacks!</h1>
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
