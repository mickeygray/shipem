const express = require ('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const router = express.Router();

// @route     GET  api/auth
// @desc      get logged in user
// @access    private

router.get('/', auth, async (req,res) => {
 try {
     const user = await User.findById(req.user.id).select('-password');
     res.json(user);
 } catch (err) {
     console.error(err.message);
     res.status(500).send('Serverer');

 }
});

// @route     POST  api/auth
// @desc      get logged in user
// @access    private

router.post('/',
async (req,res) => {   

    const {email, password } = req.body;

    try {
        let user  = await User.findOne({ email });

        if(!user ){
            return res.status(400).json({ msg: 'invalid cred'});}

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({ msg: 'invalid crdddded'})
            }
            const payload = {
                user: {
                    id: user.id
                }
            };
      
            jwt.sign(
                payload, config.get('jwtSecret'),
                {
                expiresIn: 360000
            },
            (err,token) => {
                if(err) throw err;
                res.json({ token });
              }
            ); 


    }catch (err) {
        console.error(err.message);
        res.status(500).send('servererror');

    }

});

module.exports = router;