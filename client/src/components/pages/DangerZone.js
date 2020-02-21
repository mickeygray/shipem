import React, { useContext, useEffect, Fragment } from 'react'
import AuthContext from '../../context/auth/authContext'
import UserContext from '../../context/user/userContext'
import LeadContext from '../../context/Lead/leadContext'
import Reminders from '../dangerzone/Reminders'
import MyLeads from '../dangerzone/MyLeads'

const DangerZone = () => {
 const authContext = useContext(AuthContext);
 const userContext = useContext(UserContext);
 const leadContext = useContext(LeadContext);

 const { updateUser, getMyLeads } = userContext
 const { user } = authContext
 console.log(user); 
    return (
        <div>
           <h1 className='text-danger'>Danger Zone!</h1>
   
           <div className='card bg-dark' style={{width:'25rem'}}>
             Hello { user ? user.name : ''}, claw their eyes out... 
          </div>
         <div className = 'grid-3'>
         
         <Fragment>
           <Reminders/>
         </Fragment>
       
         <div>
           Something 
         </div>

         <Fragment>
          <MyLeads/>
         </Fragment>
         </div>
        </div>
    )
}

export default DangerZone
