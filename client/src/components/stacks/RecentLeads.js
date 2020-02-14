import React, { useContext, useEffect } from 'react'
import LeadContext from '../../context/Lead/leadContext';
import RecentLeadItem from './RecentLeadItem';


const RecentLeads = () => {

  const leadContext = useContext(LeadContext);

  const { setRecent, recentLeads, setLead } = leadContext;
  
  useEffect(() => {

}, [leadContext, setRecent, setLead]);

    return (
        <div> 
    {recentLeads !== [] ? recentLeads.map((recentLead => <RecentLeadItem key={recentLead._id} recentLead={recentLead}/>)) : 'Recent Leads'}
        </div>
  
    )
}

export default RecentLeads
