import React, { useContext, useEffect, useState }  from 'react';
import LeadContext from '../../context/Lead/leadContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import UserContext from '../../context/user/userContext';
import CallContext from '../../context/call/callContext';

const PopkisForm = () => {
    const leadContext = useContext(LeadContext);




    const {getLead, setNote, lead, setRecent, note, recentLead } = leadContext;

  

    


useEffect(() => { clearLead();  },[])

    

useEffect(() => {  
    if (recentLead !== null)  {
      
      setLead(recentLead);}
      else {  
        setLead({
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
          name2:'',
          address2:'',
          city2: '',
          state2: '',
          zip2: '',
          ssn2: '',
          lexId2:'',
          dob:'',
          dob2:'',
          relation:'',
          phone2:'',
          phone3: '',
          email2:'',
          email3:'',
          prac:'',
          problem1: '',
          problem2: '',
          problem3: '',
          resSold:'',
          resSold2:'',
          home:'',
          homePay:'',
          wages:'',
          income1Type:'',
          income1Value:'',
          income2Type:'',
          income2Value:'',
          income3Type:'',
          income3Value:'',
          otherIncomeType:'',
          otherIncomeValue:'',
          creditScore:'',
          availableCredit:'',
          totalCredit:'',
          employerName:'',
          employerPhone:'',
          employerTime:''
        });
      }
    }, [setRecent,recentLead]); 
  
useEffect(() => {
    

        if (lead !== null) {
        
          setLead(lead);
  
       
        }else {
         
          setLead({
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
          name2:'',
          address2:'',
          city2: '',
          state2: '',
          zip2: '',
          ssn2: '',
          lexId2:'',
          dob:'',
          dob2:'',
          relation:'',
          phone2:'',
          phone3: '',
          email2:'',
          email3:'',
          prac:'',
          problem1: '',
          problem2: '',
          problem3: '',
          resSold:'',
          resSold2:'',
          home:'',
          homePay:'',
          wages:'',
          income1Type:'',
          income1Value:'',
          income2Type:'',
          income2Value:'',
          income3Type:'',
          income3Value:'',
          otherIncomeType:'',
          otherIncomeValue:'',
          creditScore:'',
          availableCredit:'',
          totalCredit:'',
          employerName:'',
          employerPhone:'',
          employerTime:''
          });
        }
      }, [getLead,lead]);


    


    const [leadFields, setLead] = useState({
      name: '',
      dob: '',
      dob2: '',
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
      name2:'',
      address2:'',
      city2: '',
      state2: '',
      zip2: '',
      ssn2: '',
      lexId2:'',
      relation:'',
      phone2:'',
      phone3: '',
      email2:'',
      email3:'',
      prac:'',
      problem1: '',
      problem2: '',
      problem3: '',
      resSold:'',
      resSold2:'',
      home:'',
      homePay:'',
      wages:'',
      income1Type:'',
      income1Value:'',
      income2Type:'',
      income2Value:'',
      income3Type:'',
      income3Value:'',
      otherIncomeType:'',
      otherIncomeValue:'',
      creditScore:'',
      availableCredit:'',
      totalCredit:'',
      employerName:'',
      employerPhone:'',
      employerTime:''
    })

          const clearLead = () => {

            setLead({
              name: '',
              dob:'',
              dob2:'',
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
              name2:'',
              address2:'',
              city2: '',
              state2: '',
              zip2: '',
              ssn2: '',
              lexId2:'',
              relation:'',
              phone2:'',
              phone3: '',
              email2:'',
              email3:'',
              prac:'',
              problem1: '',
              problem2: '',
              problem3: '',
              resSold:'',
              resSold2:'',
              home:'',
              homePay:'',
              wages:'',
              income1Type:'',
              income1Value:'',
              income2Type:'',
              income2Value:'',
              income3Type:'',
              income3Value:'',
              otherIncomeType:'',
              otherIncomeValue:'',
              creditScore:'',
              availableCredit:'',
              totalCredit:'',
              employerName:'',
              employerPhone:'',
              employerTime:''
            });
        
          }

          const { dob,noteSpace2 , dob2,name,address,city,state,zip,plaintiff,amount,email,lexId,compliant,filingStatus,cpa,ssn,phone,name2,address2,city2,state2,zip2,employerTime,ssn2,lexId2,relation,phone2,phone3,email2,email3,prac,problem1,problem2,problem3,resSold,resSold2,home,homePay,wages,income1Type,income1Value,income2Type,income2Value,income3Type,income3Value,otherIncomeType,otherIncomeValue,creditScore,availableCredit,totalCredit,employerName,employerPhone} = leadFields
          
     

          
     
          
          const onChange = e => {
            //setDate({...dob,dob2, [e.target.name]: e.target.value })
            setLead({...name, address, city,state,zip,plaintiff,amount,email,lexId,compliant,filingStatus,cpa,noteSpace2,ssn,phone,name2,address2,city2,state2,zip2,employerTime,ssn2,lexId2,dob,dob2,relation,phone2,phone3,email2,email3,prac,problem1,problem2,problem3,resSold,resSold2,home,homePay,wages,income1Type,income1Value,income2Type,income2Value,income3Type,income3Value,otherIncomeType,otherIncomeValue,creditScore,availableCredit,totalCredit,employerName,employerPhone,[e.target.name]: e.target.value });
    
          }         
    
    
return (
<form className='container'>

<div className='container grid-2 '>

<div className="card">
{/* contact info panel */}

<h5>Primary Contact</h5>
<label htmlFor='name'>Name</label>
<input
  type='text'
  placeholder='Name'
  name='name'
  value={name}
  onChange={onChange}
/>
<label htmlFor='address'>Address</label>
  <input
  type='text'
  placeholder='Address'
  name='address'
  value={address}
  onChange={onChange}
/>
<label htmlFor='city'>City</label>
  <input
  type='text'
  placeholder='City'
  name='city'
  value={city}
  onChange={onChange}
/>
<label htmlFor='state'>State</label>
<input
  type='text'
  placeholder='State'
  name='state'
  value={state}
  onChange={onChange}
/>
<label htmlFor='Zip'>Zip</label>
  <input
  type='text'
  placeholder='Zip Code'
  name='zip'
  value={zip}
  onChange={onChange}
/>
<label htmlFor='ssn'>Social Security Number</label>
<input
  type='text'
  placeholder='Social Security Number'
  name='ssn'
  value={ssn}
  onChange={onChange}
/>


<label htmlFor='Lex Id'>Lexis Id</label>
<input
  type='text'
  placeholder='Lex Id'
  name='lexid'
  value={lexId}
  onChange={onChange}
/>
<label htmlFor='dob'>Date of Birth</label>
<label htmlFor='Zip'>Zip</label>
  <input
  type='text'
  placeholder='mm/dd/yyyy'
  name='dob'
  value={dob}
  onChange={onChange}
/>

<br/>
<label htmlFor='filingStatus'>Filing Status</label>
<select name='filingStatus' value={filingStatus} onChange={onChange}>
  <option selected={filingStatus === ''} value=''></option>
  <option selected={filingStatus === 'married joint' } value='married joint'>Married Filing Joint</option>
  <option selected={filingStatus === 'married seperate' } value='married seperate'>Married Filing Seperate</option>
  <option selected={filingStatus === 'single' } value='single'>Single</option>
  <option selected={filingStatus === 'hoh' } value='hoh'>Head of Household</option>
</select>
</div>

{/*Secondary Contact*/}
<div className="card" >
<h5>Secondary Contact</h5>
<label htmlFor='name2' className='text-right'>Name</label>
<input
  type='text'
  placeholder='Name'
  name='name2'
  value={name2}
  onChange={onChange}
/>
<label htmlFor='address2'>Address</label>
  <input
  type='text'
  placeholder='Address'
  name='address2'
  value={address2}
  onChange={onChange}
/>
<label htmlFor='city2'>City</label>
  <input
  type='text'
  placeholder='City'
  name='city2'
  value={city2}
  onChange={onChange}
/>
<label htmlFor='state2'>State</label>
<input
  type='text'
  placeholder='State'
  name='state2'
  value={state2}
  onChange={onChange}
/>
<label htmlFor='zip2'>Zip</label>
  <input
  type='text'
  placeholder='Zip Code'
  name='zip2'
  value={zip2}
  onChange={onChange}
/>
<label htmlFor='ssn2'>Social Security Number</label>
<input
  type='text'
  placeholder='Social Security Number'
  name='ssn2'
  value={ssn2}
  onChange={onChange}
/>

<label htmlFor='LexId2'>Lex Id</label>
<input
  type='text'
  placeholder='Lex Id'
  name='lexId2'
  value={lexId2}
  onChange={onChange}
/>
<label htmlFor='dob2'>Date of Birth</label>

  <input
  type='text'
  placeholder='mm/dd/yyyy'
  name='dob2'
  value={dob2}
  onChange={onChange}
/>

<br/>
<label htmlFor='relation'>Relation to Primary</label>
<select name='relation' value={relation} onChange={onChange}> 
  <option selected={relation === ''} value=''></option>  
  <option selected={relation === 'spouse'} value='spouse'>Spouse</option>
  <option selected={relation === 'child'} value='child'>Child</option>
  <option selected={relation === 'parent'} value='parent'>Parent</option>
  <option selected={relation === 'poa'} value='poa'>Power of Attorney</option>
</select>
</div>  
</div>
<div className='container'>
<div className='card grid-2 container mx-1'style={{width:'30rem'}}>
<div>
<h5>Contact Information</h5>
<label htmlFor='phone'>Primary Phone</label>
<br/>
<input
  className='mx-1'
  type='text'
  placeholder='Phone Number'
  name='phone'
  value={phone}
  onChange={onChange}
/>
<br/>
<label htmlFor='phone2'>Secondary Phone</label>
<br/>
<input
  className='mx-1'
  type='text'
  placeholder='Phone Number'
  name='phone2'
  value={phone2}
  onChange={onChange}
/>
<br/>
<label htmlFor='phone3'>Tertiary Phone</label>
<br/>
<input
  className='mx-1'
  type='text'
  placeholder='Phone Number'
  name='phone3'
  value={phone3}
  onChange={onChange}
/>
</div>
<div>

<label htmlFor='email'>Primary Email</label>
<br/>
<input
  type='text'
  placeholder='E-Mail'
  name='email'
  value={email}
  onChange={onChange}
/>
<br/>
<label htmlFor='email2'>Secondary Email</label>
<br/>
<input
  type='text'
  placeholder='E-Mail'
  name='email2'
  value={email2}
  onChange={onChange}
/>
<br/>
<label htmlFor='Zip'>Tertiary Email</label>
<br/>
<input
  type='text'
  placeholder='E-Mail'
  name='email3'
  value={email3}
  onChange={onChange}
/>
</div>
</div>
</div>      


<div className='container grid-2a'>
<div className ="card" style={{width:'15rem'}}>
<h5>Case Information</h5>
<label htmlFor='plaintiff'>Lien Filed By</label>
<br/>
 <input
  type='text'
  style={{width:'12rem'}}
  placeholder='Plaintiff'
  name='plaintiff'
  value={plaintiff}
  onChange={onChange}
/>
<br/>
<label htmlFor='Lien Amount'>Amount Due</label>
<br/>
<input
  type='text'
  placeholder='Tax Debt'
  name='amount'
  value={amount}
  onChange={onChange}
/>
<br/>
<label htmlFor='prac'>Prac Call Info</label>
<br/>
<textarea value={noteSpace2} placeholder='Prac Call Notes (please include date)' style={{width:'12rem'}}>

</textarea>
<br/>
<label htmlFor='problem1'>Tax Problem 1</label>
<br/>
<select name='problem1' value={problem1} onChange={onChange}>
  <option selected={problem1 === ''} value=''></option>
  <option selected={problem1 === 'fedReturn'} value="fedReturn">Unfiled Federal</option>
  <option selected={problem1 === 'stateReturn'} value='stateReturn'>Unfiled State</option>
  <option selected={problem1 === 'fedDebt'} value='fedDebt'>Personal Federal Debt</option>
  <option selected={problem1 === 'stateDebt'} value='stateDebt'>Personal State Debt </option>
  <option selected={problem1 === 'business'} value='business'>Sales Tax / 941 </option>
</select>
<br/>
<label htmlFor='problem2'>Tax Problem 2</label>
<br/>
<select name='problem2' value={problem2} onChange={onChange}> 
<option selected={problem2 == ''} value=''></option>
  <option selected={problem2 === 'fedReturn'} value="fedReturn">Unfiled Federal</option>
  <option selected={problem2 === 'stateReturn'} value='stateReturn'>Unfiled State</option>
  <option selected={problem2 === 'fedDebt'} value='fedDebt'>Personal Federal Debt</option>
  <option selected={problem2 === 'stateDebt'} value='stateDebt'>Personal State Debt </option>
  <option selected={problem2 === 'business'} value='business'>Sales Tax / 941 </option>
</select>
<br/>
<label htmlFor='taxStatus'>Tax Problem 3</label>
<br/>
<select name='problem3' value={problem3} onChange={onChange}>
<option selected={problem3 == ''} value=''></option>
  <option selected={problem3 === 'fedReturn'} value="fedReturn">Unfiled Federal</option>
  <option selected={problem3 === 'stateReturn'} value='stateReturn'>Unfiled State</option>
  <option selected={problem3 === 'fedDebt'} value='fedDebt'>Personal Federal Debt</option>
  <option selected={problem3 === 'stateDebt'} value='stateDebt'>Personal State Debt </option>
  <option selected={problem3 === 'business'} value='business'>Sales Tax / 941 </option>
</select>
<br/>
<label htmlFor='resSold'>Primary Resolution Sold</label>
<br/>
<select name='resSold' value={resSold} onChange={onChange}>
  <option selected={resSold === ''} value=''></option>
  <option selected={resSold === 'cnc'} value='cnc'>Non-Collectible</option>
  <option selected={resSold === 'oic'} value='oic'>Offer in Compromise</option>
  <option selected={resSold === 'txp'} value='txp'>Tax Prep</option>
  <option selected={resSold === 'sto'} value='sto'>State Only</option>
  <option selected={resSold === 'corp'} value='corp'>Corporate Structuring</option>
</select>
<br/>
<label htmlFor='resSold2' >Secondary Resolution Sold</label>
<br/>
<select name='resSold2' value={resSold2} onChange={onChange}>
<option selected={resSold2 == ''} value=''></option>
  <option selected={resSold2 === 'cnc'} value='cnc'>Non-Collectible</option>
  <option selected={resSold2 === 'oic'} value='oic'>Offer in Compromise</option>
  <option selected={resSold2 === 'txp'} value='txp'>Tax Prep</option>
  <option selected={resSold2 === 'sto'} value='sto'>State Only</option>
  <option selected={resSold2 === 'corp'} value='corp'>Corporate Structuring</option>
</select>

</div>


<div className ="card" style={{width:'14rem'}}>
  <h5>Snap Shot 433-A</h5>
  <div>
      <label htmlFor='home'>Home Ownership</label>
      <br/>
      <input
        type='radio'
        name='home'
        value='owns'
        checked={home === 'owns'}
        onChange={onChange}
      />{' '}Owns Home{'   '}
 
    <input
        type='radio'
        name='home'
        value='rents'
        checked={home === 'rents'}
        onChange={onChange}
      />{' '}Rents{'   '}
</div>
<label htmlFor='homePay'>Monthly Housing Payment</label>
<input
  type='text'
  placeholder='Monthly Housing Payment'
  name='homePay'
  value={homePay}
  onChange={onChange}
/>
<label htmlFor='wages'>Wages</label>
<input
  type='text'
  placeholder='Working Wages'
  name='wages'
  value={wages}
  onChange={onChange}
/>
<br/>
<h5>Passive Income</h5>
<label htmlFor='income1Type'>Income Type</label>
<br/>
<select  name='income1Type' value={income1Type} onChange={onChange}>
  <option selected={income1Type === ''} value=''></option>
  <option selected={income1Type === 'pension'} value='pension'>Pension</option>
  <option selected={income1Type === '401k'} value='401k'>401-k</option>
  <option selected={income1Type === 'ssi'} value='ssi'>Social Security</option>
</select>
<input
  type='text'
  placeholder='Income 1'
  name='income1Value'
  value={income1Value}
  onChange={onChange}
/>
<label htmlFor='income2Type' >Income Type</label>
<br/>
<select name='income2Type' value={income2Type} onChange={onChange}>
<option selected={income2Type === ''} value=''></option>
  <option selected={income2Type === 'pension'} value='pension'>Pension</option>
  <option selected={income2Type === '401k'} value='401k'>401-k</option>
  <option selected={income2Type === 'ssi'} value='ssi'>Social Security</option>
</select>
<input
  type='text'
  placeholder='Income 2'
  name='income2Value'
  value={income2Value}
  onChange={onChange}
/>
<label htmlFor='income3Type'>Income Type</label>
<br/>
<select name='income3Type' value={income3Type} onChange={onChange}>
<option selected={income3Type === ''} value=''></option>
  <option selected={income3Type === 'pension'} value='pension'>Pension</option>
  <option selected={income3Type === '401k'} value='401k'>401-k</option>
  <option selected={income3Type ==='ssi'} value='ssi'>Social Security</option>
</select>
<input
  type='text'
  placeholder='Income 3'
  name='income3Value'
  value={income3Value}
  onChange={onChange}
/>
<br/>
<label htmlFor= 'otherIncomeType'>Other Income Type</label>
<input
  type='text'
  placeholder='Other Income'
  name='otherIncomeType'
  value={otherIncomeType}
  onChange={onChange}
/>
<br/>
<label htmlFor= 'otherIncomeValue'>Value</label>
<br/>
<input
  type='text'
  placeholder='Value'
  name='otherIncomeValue'
  value={otherIncomeValue}
  onChange={onChange}
/>
</div>
</div>

<div className='container'>
<div className='card grid-2 container mx-1'style={{width:'30rem'}}>
<div>
<h5>Loans and Credit</h5>  
<label htmlFor='creditScore'>Credit score</label>

<input
  className='mx-1'
  name='creditScore'
  value={creditScore}
  type='text'
  placeholder='credit score'
  
  onChange={onChange}
/>
<br/>
<label htmlFor='availableCredit'>Available Credit</label>
<br/>
<input
  name='availableCredit'
  value={availableCredit}
  className='mx-1'
  type='text'
  placeholder='Available Credit'
  onChange={onChange}
/>
<br/>
<label htmlFor='totalCredit'>Total Credit</label>
<br/>
<input
  className='mx-1'
  type='text'
  placeholder='Total Credit'
  name='totalCredit'
  value={totalCredit}
  onChange={onChange}
/>
</div>
<div>
<label htmlFor='employerName'>Employer Name</label>
<br/>
<input
  type='text'
  placeholder='Employer Name'
  name='employerName'
  value={employerName}
  onChange={onChange}
/>
<br/>
<label htmlFor='employerPhone'>Employer Phone</label>
<br/>
<input
  type='text'
  placeholder='Employer Phone'
  name='employerPhone'
  value={employerPhone}
  onChange={onChange}
/>
<br/>
<label htmlFor='employerTime'>Time With Employer</label>
<br/>
<input
  type='text'
  placeholder='Duration at Job'
  name='employerTime'
  value={employerTime}
  onChange={onChange}
/>
</div>
</div>

</div>








</form>
    )
}

export default PopkisForm
