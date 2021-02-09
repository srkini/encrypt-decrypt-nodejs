function showHideOptions(){

    const optionId = document.getElementById('optionid').value;

    if(optionId === "0"){
        document.getElementById('encryptBlock').style.display = "none"
        document.getElementById('decryptBlock').style.display = "none"
    } else if(optionId == "1"){
        document.getElementById('encryptBlock').style.display = "block"
        document.getElementById('decryptBlock').style.display = "none"
    } else if(optionId === "2"){
        document.getElementById('encryptBlock').style.display = "none"
        document.getElementById('decryptBlock').style.display = "block"
    }
}