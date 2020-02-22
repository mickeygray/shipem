import React from 'react'

import LeadsSearch from '../stacks/LeadsSearch'
import Leads from '../stacks/Leads'
import TodaysLeads from '../stacks/TodaysLeads'

const Stacks = () => {

    return (
        
           
          
         <div className = 'grid-2a'>
        <div className ='card'>
        <h3 className='text-danger'>Stacks!</h3>
         <LeadsSearch />
         <Leads />
        </div>
        <div className ='card'>
        <h3 className='text-danger' style={{float:'right'}}>
        Racks!
        </h3>
        <br/>
        <TodaysLeads/>
         </div>
        </div>
       
   
     
    )
}

export default Stacks





