import React, { useContext, useEffect  } from 'react';
import ReminderItem from './ReminderItem';
import UserContext from '../../context/user/userContext';
import LeadContext from '../../context/Lead/leadContext';
import AuthContext from '../../context/auth/authContext';

const Reminders = () => {
  
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const leadContext = useContext(LeadContext);
  const { lead } = leadContext;
  const { user } = authContext;
/*
  if (user) {
    const { reminders } = user
    
  }
  */

 
 // 
  return (
    <>
    <div className='sidebar' style={leadStyle}>
    <div className= 'bg-white'>
        <h2 className='text-danger all-center'> My Reminders</h2>
    </div>
    {user ?
        
      user.reminders.map((reminder => <ReminderItem key={reminder.id} reminder={reminder}/>)) : ''

        }

    </div>

    </>
  );

}
const leadStyle = {
  display: 'grid',
  gridTemplateRows: 'repeat(10, 1fr)'
};


export default Reminders;