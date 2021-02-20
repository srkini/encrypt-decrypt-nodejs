/*
------------------------------------------------------------
----------- Developed By : Srikanth Kini , 2021 ------------
------------------------------------------------------------
*/

'use strict';

const express = require('express');
const router = express.Router();
const Encrypt = require('../utils/encrypt');
const Decrypt = require('../utils/decrypt');

router.get('/',(req,res)=>{

    const encout = '',decout = '';

    res.render('index',{
        encout:encout,
        decout:decout
    });
});

router.post('/getEnryptedVal',(req,res)=>{
    const freetext = req.body.freetext;
    const enckey = req.body.enckey;
    const result = Encrypt.cipher(freetext,enckey);
    res.send(result);

});

router.post('/getDecryptedVal',(req,res)=>{
    const enctext = req.body.enctext;
    const deckey = req.body.deckey;
    const result = Decrypt.decipher(enctext,deckey);
    res.send(result);
});

module.exports = router;