  
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Call = require('../models/Call.js');
const Lead = require('../models/Lead.js');
const axios = require ('axios');




router.post( '/calls', auth, async (req,res,next) => {
  
 
   const { answered, first_call, formatted_customer_name, total_calls, source_name, callid, formatted_customer_phone_number,  customer_city, customer_name, customer_phone_number, customer_state, start_time, id, tracking_phone_number } = req.body;

   
      
      try {
        const newCall = new Call({
          answered,
          first_call,
          formatted_customer_name,
          total_calls,
          source_name,
          formatted_customer_phone_number,
          customer_name,
          customer_state,
          callid,
          tracking_phone_number,
          start_time    
        });
  
       const call = await newCall.save();
       
       res.json(call);
       next(call);
    
    
       
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
    
 );

   router.get ('/calls', auth, async (req,res,next) => {
      const call = await Call.find().limit(1).sort({$natural:-1})
      
      res.json(call);

   })

   router.get ('/:id', auth, async (req,res) => {
   // console.log(req);
    const lead = await Lead.findById(req.params.id);
      
    res.json(lead);
  
 })

 router.get ('/', auth, async (req,res) => {
 

    const regex = new RegExp(`${req.query.q}`,'gi')
    const leads = await Lead.find({
      $or:[
        {name:regex},
        {address:regex},
        {lexId:regex},
        {ssn:regex}
      ]
    }
);
 
 
  res.json(leads);


})



  
router.post( '/', auth, async (req,res) => {
  
 const {phone, name, address, city, state, zip, plaintiff, amount, lienid, email, lexId, compliant, filingStatus, cpa, ssn, noteText } = req.body
 const notes = noteText
 let createdate;
 let name2;
 let address2;
 let city2;
 let state2;
 let zip2;
 let employerTime;
 let ssn2;
 let lexId2;
 let dob;
 let dob2;
 let relation;
 let phone2;
 let phone3;
 let email2;
 let email3;
 let prac;
 let problem1;
 let problem2;
 let problem3;
 let resSold;
 let resSold2;
 let home;
 let homePay;
 let wages;
 let income1Type;
 let income1Value;
 let income2Type;
 let income2Value;
 let income3Type;
 let income3Value;
 let otherIncomeType;
 let otherIncomeValue;
 let creditScore;
 let availableCredit;
 let totalCredit;
 let employerName;
 let employerPhone
 let claimedBy;

 const isClaimed = false
 const isClosed = false
 const isPaid = false
 const isApproved = false
 const createdBy = req.user.id;
 const notePostedBy = req.user.id


 const newLead = new Lead({
    notes,
    name,
    address,
    city,
    state,
    zip,
    plaintiff,
    amount,
    lienid,
    phone,
    email,
    lexId,
    compliant,
    filingStatus,
    cpa,
    ssn,
    createdate,
    createdBy,
    claimedBy,
    isClaimed,
    isApproved,
    isClosed,
    isPaid,
    name2,
    address2,
    city2,
    state2,
    zip2,
    employerTime,
    ssn2,
    lexId2,
    dob,
    dob2,
    relation,
    phone2,
    phone3,
    email2,
    email3,
    prac,
    problem1,
    problem2,
    problem3,
    resSold,
    resSold2,
    home,
    homePay,
    wages,
    income1Type,
    income1Value,
    income2Type,
    income2Value,
    income3Type,
    income3Value,
    otherIncomeType,
    otherIncomeValue,
    creditScore,
    availableCredit,
    totalCredit,
    employerName,
    employerPhone
  });

 const lead = await newLead.save();
 
 res.json(lead);

  }
);


router.put('/:id', auth, async (req, res) => {
  
  const { note, createdBy, claimedBy, isClaimed, isClosed, isPaid, _id, isApproved,name,address,city,state,zip,plaintiff,amount,email,lexId,compliant,filingStatus,cpa,ssn,phone,name2,address2,city2,state2,zip2,employerTime,ssn2,lexId2,dob,dob2,relation,phone2,phone3,email2,email3,prac,problem1,problem2,problem3,resSold,resSold2,home,homePay,wages,income1Type,income1Value,income2Type,income2Value,income3Type,income3Value,otherIncomeType,otherIncomeValue,creditScore,availableCredit,totalCredit,employerName,employerPhone } = req.body;
  const notes = []
  const leadFields = {};
  if (notes) leadFields.notes = [notes];
  if (dob) leadFields.dob = dob;
  if (dob2) leadFields.dob2 = dob2;
  if (createdBy) leadFields.createdBy = createdBy;
  if (claimedBy) leadFields.claimedBy = claimedBy;
  if (isClaimed === true) leadFields.isClaimed = true;
  if (isClaimed === false) leadFields.isClaimed = false;
  if (isClosed)  leadFields.isClosed = isClosed;
  if (isPaid) leadFields.isPaid = isPaid;
  if (isApproved) leadFields.isApproved = isApproved;
  if (name) leadFields.name = name;
  if (email) leadFields.email = email;
  if (phone) leadFields.phone = phone;
  if (address) leadFields.address = address;
  if (city) leadFields.city = city;
  if (state) leadFields.state = state;
  if (zip) leadFields.zip = zip;
  if (plaintiff) leadFields.plaintiff = plaintiff;
  if (amount) leadFields.amount = amount;
  if (email) leadFields.email = email;
  if (lexId) leadFields.lexId = lexId;
  if (compliant) leadFields.compliant = compliant ;
  if (filingStatus) leadFields.filingStatus = filingStatus ;
  if (cpa) leadFields.cpa = cpa;
  if (ssn) leadFields.ssn = ssn;
  if (name2) leadFields.name2 = name2;
  if (email2) leadFields.email2 = email2;
  if (phone2) leadFields.phone2 = phone2;
  if (email3) leadFields.email3 = email3;
  if (phone3) leadFields.phone3 = phone3;
  if (address2) leadFields.address2 = address2;
  if (city2) leadFields.city2 = city2;
  if (state2) leadFields.state2 = state2;
  if (zip2) leadFields.zip2 = zip2;
  if (prac) leadFields.prac = prac;
  if (problem1) leadFields.problem1 = problem1 ;
  if (problem2) leadFields.problem2 = problem2 ;
  if (problem3) leadFields.problem3 = problem3 ;
  if (resSold) leadFields.resSold = resSold;
  if (resSold2) leadFields.resSold2 = resSold2;
  if (home) leadFields.home = home;
  if (homePay) leadFields.homePay = homePay;
  if (wages) leadFields.wages = wages;
  if (income1Type) leadFields.income1Type = income1Type;
  if (income1Value) leadFields.income1Value = income1Value;
  if (income2Type) leadFields.income2Type = income2Type;
  if (income1Value) leadFields.income2Value = income2Value;
  if (income3Type) leadFields.income3Type = income3Type;
  if (income3Value) leadFields.income3Value = income3Value;
  if (otherIncomeValue) leadFields.otherIncomeValue = otherIncomeValue;
  if (otherIncomeType) leadFields.otherIncomeType = otherIncomeType;
  if (creditScore) leadFields.creditScore = creditScore;
  if (availableCredit) leadFields.availableCredit = availableCredit;
  if (totalCredit) leadFields.totalCredit = totalCredit;
  if (employerName) leadFields.employerName = employerName;
  if (employerPhone) leadFields.employerPhone = employerPhone;
  if (employerName) leadFields.employerTime = employerTime;

 

  try {
    let lead = await Lead.findById(req.params.id);

    if (!lead) return res.status(404).json({ msg: 'lead not found' });

   if(note){
     lead = await Lead.findByIdAndUpdate(
       req.params.id,
       { $push: { notes : note }},
       { 'new': true }
     )
   }else {
    lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { $set: leadFields },
      { new: true }
    );
  }
    res.json(lead);
    console.log(lead);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', auth, async (req,res) => { 
  
  const lead = req.params._id
  const noteId = req.body.id
  
  try {
  
  await Lead.findOneAndUpdate({lead:lead,"notes.id":noteId},
  {$pull:{ "notes" : {"id":noteId},}});

   res.json(lead)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


/* View Today's leads
router.post ('/today', auth, async (req,res) => {
    
//  console.log(req.body)
  
  const lead = await Lead.find().limit(1).sort({$natural:-1})
  
  res.json(lead);

})
*/
  module.exports = router;