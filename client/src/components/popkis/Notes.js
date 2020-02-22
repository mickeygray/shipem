import React, { useContext, useEffect  } from 'react';
import NoteItem from './NoteItem';
import LeadContext from '../../context/Lead/leadContext';

const Notes = ({notes}) => {
  const leadContext = useContext(LeadContext);
  const { lead } = leadContext;
  
  console.log(notes)

  return (
    <>
    { lead.notes
      ?
        <div style={noteStyle}>
         {lead.notes.map((note => <NoteItem key={note.id} note={note}/>))} 
        </div>
      : 
        ''
    }
    </>
  );
}
const noteStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '.5rem'
};




export default Notes;