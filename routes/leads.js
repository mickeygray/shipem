  
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
  const leads = await Lead.find({name:regex});
 
 
  res.json(leads);


})



  
router.post( '/', auth, async (req,res) => {
  console.log(req.user.id);  
 const { name, address, city, state, zip, plaintiff, amount, lienid, phone, callid, email, lexId, compliant, filingStatus, cpa, ssn, notes  } = req.body

 let createdate 
 const openerid = JSON.stringify(req.user.id);

  const newLead = new Lead({
    name,
    address,
    city,
    state,
    zip,
    plaintiff,
    amount,
    lienid,
    callid,
    phone,
    email,
    lexId,
    compliant,
    filingStatus,
    cpa,
    ssn,
    notes,
    createdate,
    isClaimed,
    isClosed,
    isPaid
  });

 const lead = await newLead.save();
 
 res.json(lead);
 console.log(lead);
  }
);

/*
router.get ('/', auth, async (req,res) => {
    
//  console.log(req.body)
  
  const lead = await Lead.find().limit(1).sort({$natural:-1})
  
  res.json(lead);

})
*/
  module.exports = router;