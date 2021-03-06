import React, { useContext, useEffect, useState, Fragment } from 'react';
import LeadContext from '../../context/Lead/leadContext';





const LeadForm = () => {

  const leadContext = useContext(LeadContext);

  const { clearLiens, lien, setLien, letCall, number, clearNumber, addLead, postLogics } = leadContext;
  
  

  useEffect(() => {
    
    if (lien !== null) {
   
      setRecord(lien);

    }else {
      setRecord({
        name: '',
        address:'',
        city:'',
        state:'',
        zip:'',
        plaintiff:'',
        amount:'' 
      });
    }
  }, [lien, leadContext]);

  useEffect (()=>{ 
   
    if(number !== null){

      setCall({phone:number});

    }else {
      setCall({phone:''});
    }
  },[number, leadContext]);
  
  const [ record, setRecord ] = useState({
    name: '',
    address:'',
    city:'',
    state:'',
    zip:'',
    plaintiff:'',
    amount:'',
    lienid:''
  });

  const [ call, setCall ] = useState({
        phone: ''});
  

  const [ open, setOpen ] = useState({
       email:'',
       lexId:'',
       compliant:'filed',
       filingStatus:'married',
       cpa: 'cpa',
       ssn:'',
       noteText:''
  });


  const onChange = e => {
    const { name, value } = e.target;

    if (Object.keys(record).includes(name)) {
        setRecord(prev => ({...prev, [name]: value}));
    }
    if (Object.keys(call).includes(name)) {
      setCall(prev => ({...prev, [name]: value}));
    }  
    if (Object.keys(open).includes(name)) {
      setOpen(prev => ({...prev, [name]: value}));
    }         
    
  }



/*
  const onChange = e => {
    setRecord({...name, address, city, state, zip, plaintiff, amount, [e.target.name]: e.target.value });
    setCall({...phone, [e.target.name]: e.target.value });
    setOpen({...email, lexId, compliant, filingStatus, cpa, ssn, noteText, [e.target.name]: e.target.value});
  }
*/
  const { name, address, city, state, zip, plaintiff, amount, lienid } = record
  const { phone } = call
  const { email, lexId, compliant, filingStatus, cpa, ssn, noteText } = open

  

  const lead = {phone, name, address, city, state, zip, plaintiff, amount, lienid, email, lexId, compliant, filingStatus, cpa, ssn, noteText }

  
  const clearLead = () => {
    clearNumber();
    setLien('');
    setRecord({
      name: '',
      address:'',
      city:'',
      state:'',
      zip:'',
      plaintiff:'',
      amount:'',
    });
    setCall({
      phone: ''});

    setOpen({
        email:'',
        lexId:'',
        compliant:'filed',
        filingStatus:'m',
        cpa: 'cpa',
        noteText:'',
        ssn:''
   });  

  }

  const onSubmit = e => {
      e.preventDefault();
      addLead(lead);
      clearAll();
    };  

  const clearAll = () => {
      clearLiens();
      clearLead();
    };

  const onClick = e => {
    letCall(number);
  }
  




  return (
  
    <Fragment>
     <p className='text-center' >
        <strong className='text-danger  large'>Ship Em!</strong> 
      </p>

    <form onSubmit={onSubmit} >

 
              
    <div className="container grid-2">
    <div className="card">
  
    <input
        type='text'
        placeholder='name'
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
        name='lexId'
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
        value='married'
        checked={filingStatus === 'married'}
        onChange={onChange}
      />{' '}Married{'   '}
 
    <input
        type='radio'
        name='filingStatus'
        value='single'
        checked={filingStatus === 'single'}
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
value={noteText}
placeholder='notes'
name='noteText'
onChange={onChange}
/></div>



  
      <div>
        <input
          type='submit'
          className='btn btn-danger btn-block'
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
    </Fragment>
  );
}

export default LeadForm;