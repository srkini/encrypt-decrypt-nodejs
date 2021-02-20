/*
------------------------------------------------------------
----------- Developed By : Srikanth Kini , 2021 ------------
------------------------------------------------------------
*/

'use strict';

const CryptoJS = require('crypto-js');

class Encrypt{

    constructor(freetext,enckey){
        this.freetext = freetext;
        this.enckey = enckey;
    }

    static cipher(freetext,enckey){
        const ciphertext = CryptoJS.AES.encrypt(freetext,enckey).toString();
        return ciphertext;
    }
}

module.exports = Encrypt;