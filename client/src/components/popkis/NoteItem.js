import React, { useContext } from 'react'
import LeadContext from '../../context/Lead/leadContext'


const NoteItem = ({note:{note, noteId, notePostedBy}}) => {
   
    const { setNote, deleteNote } = useContext(LeadContext)
    
   

    return (
      <div>
      <button className='btn btn-white btn-sm' onClick={()=>setNote(note)}>{notePostedBy ? notePostedBy : 'Opener'}</button>  <span style={{float:'right'}}><button>X</button></span>   
      </div>      
    )
}

export default NoteItem
