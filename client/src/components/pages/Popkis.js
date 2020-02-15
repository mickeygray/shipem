import React, { useContext, useEffect, useState }  from 'react';
import LeadContext from '../../context/Lead/leadContext';
import AuthContext from '../../context/auth/authContext';



const Popkis = ({ match }) => {
    
    const leadContext = useContext(LeadContext);
    const authContext = useContext(AuthContext);

    const { user } = authContext;
    const { getLead, lead, setRecent, setCalls, setCloserId, clearLeadFields, recentLead, setRecentLead } = leadContext;

    const { createdBy, claimedBy, isClaimed, isClosed, isPaid } = lead


useEffect(() => { clearLead();  },[])

    

useEffect(() => {  
    if (recentLead !== null)  {
      
      setLeadFields(recentLead);}
      else {  
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
          compliant:'',
          filingStatus:'',
          cpa: '',
          ssn:'',
          phone:'',
          note:'' 
        });
      }
    }, [setRecent,recentLead]); 
  
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
            compliant:'',
            filingStatus:'',
            cpa: '',
            ssn:'',
            phone:'',
            note:'' 
          });
        }
      }, [getLead,lead]);


     
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

          const clearLead = () => {

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

          const onChange = e => {
            setLeadFields({...name, address, city, state, zip, plaintiff, amount, email, phone, cpa, filingStatus, ssn, note, [e.target.name]: e.target.value });
          }         
  
          
     /* 
     <div>
<button className='btn-danger btn-sm btn py-3 my-1' onClick={()=>setCalls(phone)}>Get Calls</button>

</div>
     */

   
return (
  <div>
   <h3 className='text-danger'>Popkis!</h3>
  <div className= 'navbar all-center' >
 <ul >
 <li><button className='btn-success btn-sm btn' >Claim</button></li> 
 <li><button className='btn-success btn-sm btn' >Save</button></li> 
  </ul>
  </div>     
        
<div className="grid-6">


<div className='sidebar'> 
  <button className='btn-danger btn-sm btn py-3 my-1' onClick={()=>setCalls(phone)}>Get Calls</button>
  <div className='card'>
    Link to all recorded calls
  </div>
</div>

<div className='container all-center'> 

<form className='container'>

<div className='container grid-2 all-center'>

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

<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>
<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>
<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>
<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>
<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>


</div>      
</div>  
<div className='container grid-2 all-center'>
<div className ="card">
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
<div className ="card">
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

</div>

</form>
</div>


<div>
<div className='card'> 
  <div className='card'>
    notes
  </div>
<textarea
value={note}
placeholder='notes'
onChange={onChange}
/>
<button className='btn-danger btn-sm btn py-3 my-1' >Submit Note</button>
</div>
<div className='card'> 
<div className='card'>
  tasks
</div>
<button className='btn-danger btn-sm btn py-3 my-1' >Set Task</button> 
<select>
  <option>Federal Prac Call</option>
  <option>State Prac Call</option>
  <option>Document Follow-up</option>
  <option>File State Returns</option>
  <option>File Federal Returns</option>
  <option>Hardship Call</option>
  <option>File Offer</option>
  <option>Upsell Review</option>
</select>
</div>

<div className='card'> 
<button className='btn-danger btn-sm btn py-3 my-1' >Populate Form</button> 
<select>
  <option>433-A</option>
  <option>12153</option>
  <option>8821</option>
  <option>2848</option>
  <option>646</option>
</select>
</div>

<div className='card'> 
<div className='card'>
  THS Query
</div>
<button className='btn-danger btn-sm btn py-3 my-1' >Pull THS </button> 
</div>

<div className='card'> 

<div className='card'>
  
  <button className='btn-danger btn-sm btn py-3 my-1' >DropBox upload</button> 
  <input type='file'/>
  
</div> 

<div className='card'>
  
  <button className='btn-danger btn-sm btn py-3 my-1' >Search</button> 
  <input type='text' placeholder='search dropbox'/>
  
<div className='card'>
    Dropbox Content
</div>

</div>


</div>



</div>


</div>

</div>



    )
}

export default Popkis;
