import React, { useContext, useEffect, useState } from 'react'
import LeadContext from '../../context/Lead/leadContext'
import TodaysLeadItem from '../stacks/TodaysLeadItem'
import Leads from './Leads';

const TodaysLeads = () =>  {

const leadContext = useContext(LeadContext);
const { addLead, lead, todaysLeads, getLead } = leadContext
const { isClaimed } = lead

useEffect(()=>{
  if (!todaysLeads){
   localStorage.setItem('todaysLeads', todaysLeads);
   
  }else if(todaysLeads.length>2){
   const distinct =  (value, index, self) => {
     return self.indexOf(value) === index;}
   todaysLeads.filter(distinct)
  }
 },[])

useEffect(()=>{
 
 todaysLeads.push(lead)


},[addLead,lead])



console.log(todaysLeads)
 
 return (
<div style={leadStyle}>   
{todaysLeads.length > 0
    ? todaysLeads.map(
        lead =>
          lead.isClaimed === false && (
            <TodaysLeadItem key={lead._id} lead={lead} />
          )
      )
    : ""}</div>
    );
  
    }
    const leadStyle = {
      display: 'grid',
      gridTemplateRows: 'repeat(10, 1fr)',
      gridGap: '.5rem'
    };
  
  

export default TodaysLeads
