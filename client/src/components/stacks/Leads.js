import React, { useContext, useEffect  } from 'react';
import LeadItem from './LeadItem';
import LeadContext from '../../context/Lead/leadContext';

const Leads = () => {
  
  const leadContext = useContext(LeadContext);
  
  const { getLeads, leads } = leadContext;
 


return (
  <div style={leadStyle}>
   
  {leads.map((lead => <LeadItem key={lead._id} lead={lead}/>))} 
  
  </div>
  );

  }
  const leadStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridGap: '.5rem'
  };


export default Leads;