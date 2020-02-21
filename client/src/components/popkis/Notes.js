import React, { useContext, useEffect  } from 'react';
import NoteItem from './NoteItem';
import LeadContext from '../../context/Lead/leadContext';

const Notes = () => {
  const leadContext = useContext(LeadContext);
  const { lead } = leadContext;


  return (
    <>
    { lead.notes
      ?
        <div className='leadul'>
         {lead.notes.map((note => <NoteItem key={note.id} note={note}/>))} 
        </div>
      : 
        <p>Data is still loading! Show a nice loading icon here</p>
    }
    </>
  );
}

export default Notes;