import React, { useContext, useState } from 'react';
import LeadContext from '../../context/Lead/leadContext';
import AlertContext from '../../context/alert/alertContext';
import UserContext from '../../context/user/userContext';

const LeadsSearch = () => {
  const leadContext = useContext(LeadContext);
  const alertContext = useContext(AlertContext);
  const userContext = useContext(UserContext);
  

  const { getLeads, isClaimed, isClosed, isPaid} = leadContext
  const { getMyLeads } = userContext

  const [text, setText] = useState('');


  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
       setText('');
    }
  };

  
const onChange = e => setText(e.target.value);

  return (
    <div className='container'>
      <form onSubmit={onSubmit} className='grid-5' >
        <div className='card'>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onChange}
        />
        <br />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-sm'
          onClick={()=>getLeads(text)}
        />
        </div>  

       
        <div className='card'>
       <p>Start <span style={{float:'right'}}>End</span> </p>
       {'  '}
       <input
          type='date'
          name='date'
   
        />{'  '}
          {'  '}
        <input
          type='date'
          name='date'
          style={{float:'right'}}

        />
        <br />
        <input
          type='submit'
          value='Search Date Range'
          className='btn-white btn-sm btn all-center'
        />
</div>
         
  <div className='card'>  
        <input
        type='radio'
        name='Lead'
        value='isClaimed'
        checked={isClaimed === 'false'} 
      />{' '}
      Lead {' '}
      <input
        type='radio'
        name='Client'
        value='isClosed'
        checked={isClosed === 'true' && isPaid === 'false'}
      />{' '}
      Client
   <br />
      <input
          type='submit'
          value='Unclaimed'
          className='btn-danger btn-sm btn py-3'
        />
  </div>
      </form>

    </div>
  );
};

export default LeadsSearch;
