import React, { useContext, useEffect, useState } from 'react'
import LeadContext from '../../context/lead/leadContext';
import Calls from '../calls/Calls';
import Search from '../../components/layout/Search';
import Filter from '../layout/Filter';
import Filters from '../layout/Filters';


const Lead = ({match}) => {

    const leadContext = useContext(LeadContext);

    const { getLead, lead } = leadContext;

    useEffect(() => {
        getLead(match.params._id);

      }, []);
      console.log(match);

      useEffect(() => {
    
        if (lead !== null) {
       
          setLeadFields(lead);
    
        }else {
         setLeadFields({
            name: '',
            address:'',
            city:'',
            state:'',
            zip:'',
            plaintiff:'',
            amount:'',
            email:'',
            lexId:'',
            compliant:'filed',
            filingStatus:'m',
            cpa: 'cpa',
            ssn:'',
            phone:'',
            note:'' 
          });
        }
      }, [lead, leadContext]);
     
    const [leadFields, setLeadFields] = useState({
        name: '',
        address:'',
        city:'',
        state:'',
        zip:'',
        plaintiff:'',
        amount:'',
        email:'',
        lexId:'',
        compliant:'filed',
        filingStatus:'m',
        cpa: 'cpa',
        ssn:'',
        phone:'',
        note:'' 
    })

      const {
          name, 
          address, 
          city, 
          state, 
          zip, 
          plaintiff, 
          amount, 
          email, 
          lexId, 
          compliant, 
          filingStatus, 
          cpa, 
          ssn, 
          phone, 
          note } = leadFields;

          console.log(name);

          const onChange = e => {
            setLeadFields({...name, address, city, state, zip, plaintiff, amount, email, phone, cpa, filingStatus, ssn, note, [e.target.name]: e.target.value });
          }         
   
   
    return (
        <div className="container grid-3">
<div>
    <Search />
    <Filters />
</div>


<form>

<div className="container grid-2">
<div className="card">

<input
  type='text'
  placeholder='Name'
  name='name'
  value={name}
  onChange={onChange}
/>

          <input
  type='text'
  placeholder='Address'
  name='address'
  value={address}
  onChange={onChange}
/>
        <input
  type='text'
  placeholder='City'
  name='city'
  value={city}
  onChange={onChange}
/>

<input
  type='text'
  placeholder='State'
  name='state'
  value={state}
  onChange={onChange}
/>


    <input
  type='text'
  placeholder='Zip Code'
  name='zip'
  value={zip}
  onChange={onChange}
/>

  
<input
  type='text'
  placeholder='Plaintiff'
  name='plaintiff'
  value={plaintiff}
  onChange={onChange}
/>

<input
  type='text'
  placeholder='Tax Debt'
  name='amount'
  value={amount}
  onChange={onChange}
/>
<input
  type='text'
  placeholder='Social Security Number'
  name='ssn'
  value={ssn}
  onChange={onChange}
/>
</div>
<div className="card" >
<input
  type='text'
  placeholder='Phone Number'
  name='phone'
  value={phone}
  onChange={onChange}
/>

<input
  type='text'
  placeholder='E-Mail'
  name='email'
  value={email}
  onChange={onChange}
/>

<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>
<div>
<h5 className ='text-center'>Compliance Status</h5>
<input
  type='radio'
  name='compliant'
  value='filed'
  checked={compliant === 'filed'}
  onChange={onChange}
/>{' '}
Filed {' '}
<input
  type='radio'
  name='compliant'
  value='unfiled'
  checked={compliant === 'unfiled'}
  onChange={onChange}
/>{' '}
Unfiled
</div>  
<div>
<h5 className ='text-center'>Marital Status</h5>
<input
  className=''
  type='radio'
  name='filingStatus'
  value='m'
  checked={filingStatus === 'm'}
  onChange={onChange}
/>{' '}Married{'   '}

<input
  type='radio'
  name='filingStatus'
  value='s'
  checked={filingStatus === 's'}
  onChange={onChange}
/>{' '}Single{'   '}
</div>
<h5 className ='text-center'>Tax Representation</h5>
<input
  type='radio'
  name='cpa'
  value='cpa'
  checked={cpa === 'cpa'}
  onChange={onChange}
/>{' '}
 CPA {' '}
<input
  type='radio'
  name='cpa'
  value='nocpa'
  checked={cpa === 'nocpa'}
  onChange={onChange}
/>NO CPA{' '}
</div>      
</div>  
<div className='card all-center'>
<textarea
value={note}
placeholder='notes'
onChange={onChange}
/></div>
</form>

<div className ="sidebar">
        <Filter/>
        <Calls/>
    </div>
</div>



    )
}

export default Lead
