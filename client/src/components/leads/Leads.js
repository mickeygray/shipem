
import React, { useContext, useEffect  } from 'react';
import LeadItem from './LeadItem';
import LeadContext from '../../context/lead/leadContext';

const Leads = () => {
  
  const leadContext = useContext(LeadContext);
  
  const { getLeads, leads } = leadContext;
  
  useEffect(() => {

  }, [leadContext, getLeads]);

return (
  <div style={leadStyle}>
   
  
  {leads !== [] ? leads.map((lead => <LeadItem key={lead._id} lead={lead}/>)) : 'Search For Something'}
  
  
  </div>
  );

  }
  const leadStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridGap: '.5rem'
  };


export default Leads;