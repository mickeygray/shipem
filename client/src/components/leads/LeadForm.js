
import React, { useState } from 'react';
import LeadContext from '../../context/Lead/leadContext';



const LeadForm = () => {





const [ lead, setLead ] = useState({
    name: '',
    address: '',
    phone: '', 
    email:'',
    lexId:'',
    compliant:'compliant',
    filingStatus:'m',
    cpa:'cpa'
})

const { name , phone, email, lexId, address, compliant, filingStatus, cpa } = lead
const onChange = e => {
setLead({ ...lead, [e.target.name]: e.target.value });


};

  return (
    <form >
      <h2 className='text-primary text-center'>
        Update Information 
      </h2>

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
        name='lexId'
        value={lexId}
        onChange={onChange}
      />

<div>
<h5 className ='text-center'>Compliance Status</h5>
      <input
        type='radio'
        name='compliant'
        value='compliant'
        checked={compliant === 'compliant'}
        onChange={onChange}
      />{' '}
      Compliant {' '}
      <input
        type='radio'
        name='compliant'
        value='noncompliant'
        checked={compliant === 'noncompliant'}
        onChange={onChange}
      />{' '}
      Non-Compliant
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
   
      
      <div>
        <input
          type='submit'
          className='btn btn-primary btn-block'
          value='Ship Em!'
        />
      </div>
      <div>
        <input
          type='submit'
          className='btn btn-light btn-block'
          value='Clear'
        />
      </div>
    </form>
  );
};

export default LeadForm;
