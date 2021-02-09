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