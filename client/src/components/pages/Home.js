import React, { Fragment } from 'react';
import Search from '../layout/Search';
import Liens from '../liens/Liens';
import LeadForm from '../leads/LeadForm';
import Calls from '../calls/Calls';


const Home = () => {
    return (
        <div className="grid-3">
            <div >
            <h2 className='text-primary text-center'> Enter name or address </h2>   
                <Search />
                <Liens />
            </div>
            
            <div className='mx-3'>
 
                <LeadForm />
         
            </div>

            <div> 
            <h2 className='text-primary text-center'> Call Log </h2>
                <Calls/>
            </div>

        </div>
        
    )
}

export default Home;
