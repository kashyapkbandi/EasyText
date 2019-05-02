
document.getElementById("postcode").addEventListener('click',postCodeToReveiw);
document.getElementById("clearcode").addEventListener('click',clearEditor);




function clearEditor(e) {
    
    document.getElementById("validationTextarea").value ='';
    document.getElementById('codearea').innerHTML="";
    e.preventDefault();
}

 
 
function postCodeToReveiw(e){


    var text = document.getElementById("validationTextarea").value;

// if (typeof(Storage) !== "undefined") {
//     // // Code for localStorage/sessionStorage.
//     // localStorage.setItem("code",text );
//     // } else {
//     // alert('No storage found');
//     // }

    var ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("id", "iframeResult");
    ifr.setAttribute("name", "iframeResult");  
    ifr.height=300;
    ifr.width=800;
   
  
    document.getElementById('codearea').innerHTML="";
    document.getElementById('codearea').appendChild(ifr);
  
    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
  
    ifrw.document.open();
    ifrw.document.write(text);  
    ifrw.document.close();
    
    if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
        ifrw.document.body.contentEditable = true;
    }

    e.preventDefault();


}
