const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Lien = require('../models/Lien');
const config = require('config');




//Search Like Address Only

router.get('/', auth, async (req,res) => {
    
      
  
       const regex = new RegExp(`${req.query.name}`,'gi')
       const liens = await Lien.find({address:regex});
       res.json(liens);
      

       


});

router.put('/:id', auth, async (req, res) => {
    
    const { name, address, city, state, zip, plaintiff, amount } = req.body;
  
    const lienFields = {};
    if (name) lienFields.name = name;
    if (address) lienFields.email = address;
    if (city) lienFields.phone = city;
    if (zip) lienFields.type = state;
    if (plaintiff) lienFields.type = plaintiff;
    if (amount) lienFields.type = amount;

    try {
        let lien = await Lien.findById(req.params.id);

        lien = await Lien.findByIdAndUpdate(
          req.params.id,
          { $set: lienFields },
          { new: true }
        );
    
        res.json(lien);
      } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
      }
    });
    

// post array to mongoose

router.post('/', auth, async (req,res) => {

    try{
        const liens = await Lien.insertMany(req.body);
        res.json(liens);
    
    } catch (err){
        console.error(err.message);
        res.status(500).send('servererr');
         
    }
    
    });
    




module.exports = router;