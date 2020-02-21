import React, { useContext, useEffect, useState }  from 'react';
import LeadContext from '../../context/Lead/leadContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import UserContext from '../../context/user/userContext';
import CallContext from '../../context/call/callContext';
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
<div className='sidebar' style={{height: '100%'}}>
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
