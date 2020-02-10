import React  from 'react';
import Search from '../layout/Search';
import Filter from '../layout/Filter';
import Liens from '../liens/Liens';
import LeadForm from '../leads/LeadForm';
import Calls from '../calls/Calls';


const Home = () => {
    return (
        <div className="grid-3">
            <div className='card' >
            <h3 className='text-danger'> Search By Address </h3>   
                <Search />
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

export default Home;
