const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Lien = require('../models/Lien');
const config = require('config');




//Search Like Address Only

router.get('/', auth, async (req,res) => {

    try{
    
    const liens = await Lien.find( { address: new RegExp(req.body.text,'g')});

    res.json(liens);

} catch (err){
    console.error(err.message);
    res.status(500).send('servererr');
     
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