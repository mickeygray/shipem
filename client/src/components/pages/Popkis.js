import React from 'react';
import LeadCalls from '../calls/LeadCalls';
import Notes from '../popkis/Notes';
import NotePad from '../popkis/NotePad'
import StatusBox from '../popkis/StatusBox';
import PopkisForm from '../popkis/PopkisForm';



const Popkis = ({ match }) => {

    
return (
<div>
<h1 className='text-danger'>Popkis!</h1>
<StatusBox/>         
<div className="grid-6">
<div className='sidebar'>   
<LeadCalls/>   
</div>
<div className='container'> 
<PopkisForm/>
</div>
<div className='sidebar' style={{width: '30rem'}}>
<div className='card'> 
<Notes />
<hr/>
<NotePad/>
</div>
</div>
</div>
</div>

)}

export default Popkis;
