/*
------------------------------------------------------------
----------- Developed By : Srikanth Kini , 2021 ------------
------------------------------------------------------------
*/

/* eslint-disable no-unused-vars */
function showHideOptions(){

    const optionId = document.getElementById('optionid').value;

    if (optionId === '0'){
        document.getElementById('encryptBlock').style.display = 'none';
        document.getElementById('decryptBlock').style.display = 'none';
        document.getElementById('freetext').value = '';
        document.getElementById('enckey').value = '';
        document.getElementById('encout').value = '';
        document.getElementById('enctext').value = '';
        document.getElementById('deckey').value = '';
        document.getElementById('decout').value = '';

    } else if (optionId == '1'){
        document.getElementById('encryptBlock').style.display = 'block';
        document.getElementById('decryptBlock').style.display = 'none';
        document.getElementById('enctext').value = '';
        document.getElementById('deckey').value = '';
        document.getElementById('decout').value = '';
    } else if (optionId === '2'){
        document.getElementById('encryptBlock').style.display = 'none';
        document.getElementById('decryptBlock').style.display = 'block';
        document.getElementById('freetext').value = '';
        document.getElementById('enckey').value = '';
        document.getElementById('encout').value = '';
    }
}

function showEnryptedOut(){

    const optionId = document.getElementById('optionid').value;

    /* Enryption Block */  
    const freetext = document.getElementById('freetext').value;
    const enckey = document.getElementById('enckey').value;

    /* Decryption Block */  
    const enctext = document.getElementById('enctext').value;
    const deckey = document.getElementById('deckey').value;

    if (optionId === '1' && freetext && enckey){
        $.ajax({
            url: '/getEnryptedVal',
            type: 'POST',
            data: {
                freetext: freetext,
                enckey: enckey
            },
            success: function(data) {
                document.getElementById('encout').value = data;
                document.getElementById('encbutton').disabled = false;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr);
              }
          });
    }
    else if (optionId === '2' && enctext && deckey){
        $.ajax({
            url: '/getDecryptedVal',
            type: 'POST',
            data: {
                enctext: enctext,
                deckey: deckey
            },
            success: function(data) {
                document.getElementById('decout').value = data;
                if (data === ''){
                    alert('Invalid Encrypted Text or Decryption Key');
                } else {
                    document.getElementById('decbutton').disabled = false;
                } 
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr);
              }
          });
    }
}

function copyText(id){
 
    const copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');

    alert('Text Copied to Clipboard');
    return false;

}