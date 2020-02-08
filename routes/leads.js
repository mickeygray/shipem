  
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Call = require('../models/Call.js');
const axios = require ('axios');



router.post( '/calls', auth, async (req,res,next) => {
  
 
   const {  customer_name, customer_phone_number, customer_state, id, start_time, tracking_phone_number } = req.body;

      const callid = id

      try {
        const newCall = new Call({
          customer_name,
          customer_phone_number,
          customer_state,
          callid,
          tracking_phone_number,
          start_time
          
        });
  
       const call = await newCall.save();
       
       res.json(call);
       next(call);
       console.log('call posted');
    
       
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
    
 );

   router.get ('/calls', auth, async (req,res,next) => {
      const call = await Call.find().limit(1).sort({$natural:-1})
      

      
      res.json(call);
      console.log(call);
   })

  
  router.post( '/leads',auth, async (req, res ) => {
    
    const { name , phone, email, lexId, address, compliant, filingStatus, cpa } = req.body;

    try {
      const newLead = new Lead({
        name,
        phone,
        email,
        lexId,
        address,
        compliant,
        filingStatus,
        cpa
      });

      const lead = await newLead.save();

      res.json(lead);
      
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

  module.exports = router;