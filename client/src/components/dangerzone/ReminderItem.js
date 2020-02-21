import React, { useContext } from 'react'
import LeadContext from '../../context/Lead/leadContext'
import { Link } from "react-router-dom";
import UserContext from '../../context/user/userContext'


const ReminderItem = ({reminder:{ clientId, clientName, reminderText }}) => {
   
    const { getLead } = useContext(LeadContext)
    const { updateUser } = useContext(UserContext)

   

    return (
   
   <div className='card'>
  <Link to={`/leads/${clientId}`} className='btn btn-dark btn-sm'>{clientName}</Link>  <span style={{float:'right'}}><button>X</button></span>   
  <p className='bg-yellow '>{reminderText}</p>
    </div>

    )
}

export default ReminderItem