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

router.post('/encrypt',(req,res)=>{

        const freetext = req.body.freetext;
        const enckey = req.body.enckey;
        const decout = '';        

        const encout = Encrypt.cipher(freetext,enckey);

        res.render('index',{
            encout:encout,
            decout:decout            
        });

});

router.post('/decrypt',(req,res)=>{

    const enctext = req.body.enctext;
    const enckey = req.body.enckey;
    const encout = '';        

    const decout = Decrypt.decipher(enctext,enckey);

    res.render('index',{
        encout:encout,
        decout:decout            
    });

});

module.exports = router;