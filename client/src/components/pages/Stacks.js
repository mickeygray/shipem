import React, { useContext }  from 'react';
import Search from '../layout/Search';
import Filters from '../layout/Filters';
import Leads from '../leads/Leads';
import Filter from '../layout/Filter';
import Calls from '../calls/Calls';
import LeadContext from '../../context/lead/LeadState'




const Stacks = () => {


    return (
        <div className="grid-4">
            <div className='sidebar' >
            <h3 className='text-danger'> Search By Address </h3>   
                <Search />
                <Filters/>
            </div>
            
            <div>
 
            <Leads />
         
            </div>

            <div className='card'> 
            <h3 className='text-danger text-center'> Call Log </h3>
                <Filter />
                <Calls/>
            </div>

        </div>
        
    )
}

export default Stacks;
