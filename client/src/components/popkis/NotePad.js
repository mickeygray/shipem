import React, { useContext, useEffect, useState }  from 'react';
import LeadContext from '../../context/Lead/leadContext';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';


const NotePad = () => {
    const leadContext = useContext(LeadContext);
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);


 
    const { user } = authContext;
    const { updateUser } = userContext;

    const {putNote, setNote, lead, note } = leadContext;

    
    
    
    useEffect(() => { 
      
     
      
        if(setNote) {
         
        setNoteSpace({
          noteSpace1: note
        })
        }
         else{
  
        setNoteSpace({
          noteSpace1: ''
        })
        
       }
  
      },[setNote,note])  
  
      const [noteSpace, setNoteSpace ] = useState({
           noteSpace1: ''
      })
    
    
    const { noteSpace1 } = noteSpace

          
     
          
    const onChange = e => {
      setNoteSpace({...noteSpace1,  [e.target.name]: e.target.value})
    }         
    
    
    return (
        <div>
           <form className='center' >
            <textarea
                className='center'
                style={{width:'15rem'}}
                value={noteSpace1}
                placeholder='Notes and Reminders'
                onChange={onChange}
            />

            <button className='btn-danger btn-sm btn' onClick={()=>putNote(noteSpace,user,lead)} >Note</button>
            <button className='btn-danger btn-sm btn' onClick={()=>updateUser(noteSpace,user,lead)}>Reminder</button>
            <button className='btn-light btn-sm btn' >Clear</button>
      

        </form>  
        </div>  
    )
}

export default NotePad
