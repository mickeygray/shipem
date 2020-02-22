import React  from 'react';
import LiensSearch from '../shipem/LiensSearch';
import Filter from '../calls/CallFilter';
import Liens from '../shipem/Liens';
import LeadForm from '../shipem/LeadForm';
import Calls from '../calls/Calls';


const ShipEm = () => {
    return (
        <div className="grid-3">
            <div className='card' >
            <h5 className='text-danger'> Name, Address, Amount, PinCode </h5>   
                <LiensSearch />
                <Liens />
            </div>
            
            <div className='card'>
 
                <LeadForm />
         
            </div>

            <div className='card'> 
            <h3 className='text-danger text-center'> Call Log </h3>
                <Filter />
                <Calls/>
            </div>

        </div>
        
    )
}

export default ShipEm;
