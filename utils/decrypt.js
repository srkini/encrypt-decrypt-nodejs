/*
------------------------------------------------------------
----------- Developed By : Srikanth Kini , 2021 ------------
------------------------------------------------------------
*/

'use strict';

const CryptoJS = require('crypto-js');

class Decrypt{

    constructor(enctext,enckey){
        this.enctext = enctext;
        this.enckey = enckey;
    }

    static decipher(enctext,enckey){
        const decipherval = CryptoJS.AES.decrypt(enctext,enckey);
        const deciphertext = decipherval.toString(CryptoJS.enc.Utf8);
        return deciphertext;
    }
}

module.exports = Decrypt;