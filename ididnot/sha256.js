var sha256=require(['SHAACT.js']);
var md5=require(['md5.js']);
var text;
window.hpol="";
window.hind="";
window.hjava="";
window.hdeets="";
window.ff="";
window.H_U="";
window.signed="";
window.pemPublic="";
window.pemPrivate="";
window.U_Sign="";
window.CReceipt="";
window.start="";

var rsa=forge.pki.rsa;





   
                           

var el5=document.getElementById('Submit');
el5.addEventListener("click",function(){

window.start = new Date().getTime();
console.log("Start Time: "+window.start);

var file='PrivacyPolicy.txt';
   var pur="Policy";

   var file1='index.html';
   var pur1="HTML";

   var file2='sha256.js';
   var pur2="JavaScript";
                                            shaf(file, pur);
                                            shaf(file1,pur1);
                                            shaf(file2,pur2);
                                            
                                            var el2=document.getElementById('fname').value;
                                            var el3=document.getElementById('lname').value;
                                            var el4=document.getElementById('email').value;
                                        
                                        /* WHY I DIDN'T USE INNERTEXT
                                                    <input id="example-input" type="text" value="default" />
                                                    <script>
                                                      document.getElementById('example-input').value //=> "default"
                                     ----------------> // User changes input to "something"
                                                      document.getElementById('example-input').value //=> "something"
                                                    </script>
                                        */
                                        
                                        window.deets=el2+el3+el4;
                                        var pur3="details";
                                        
                                        shafin(window.deets,pur3);
                                        
                                        setTimeout(function () {document.getElementById("Joint").click();}, 1000);
                                            
                                        },false);
                                        
    document.getElementById("Joint").addEventListener("click",function(){
    var hall=window.hpol+window.hind+window.hjava+window.hdeets;
                                        shafin(hall,"all");
    
    },false);
                                       
    function VerifyHashAndDecrypt()
    {
        var decrypted = window.KPV_U.decrypt(window.C_Sign);
        console.log("Decrypted C_Sign:"+decrypted);
        
        shafin(window.A_C,"serverhash");
        if(H_C==window.H_U)
        {
            console.log("Hashes verified on client side"); 
            
        }
        else 
        {
            console.log("Hashes unverified");
            console.log("H_C:"+H_C);
            console.log("window.H_U:"+window.H_U);
            
        }
        
        window.KPU_C=forge.pki.publicKeyFromPem(window.pemCPublic);
        
        
            
        var rc=forge.md.sha256.create();
        rc.update(window.H_U, 'utf8');
        window.UReceipt= KPU_C.encrypt(rc.digest().bytes());
        console.log("UReceipt:"+window.UReceipt);
        document.getElementById("Receipt").click();
    }

                                       
                                       
                                       
                                       


function shaf(file,pur)
{
fetch(file)
  .then(response => response.text())
  .then(text => text.toString(16))
   .then(text=>hash=shafin( text, pur ) )

 
}



async function shafin(text, pur)
{
	
    text.toString(16);
    window.ff=sha256(text);
    //window.ff=md5(text);
    window.ff.toString(16);
    console.log("real-------"+pur+" "+window.ff);           /*Hash value saved in window.ff temporarily*/
    
    

 

if(pur=="Policy")
     {window.hpol=window.ff;}
 else if(pur=="HTML")
     {window.hind=window.ff;}
 else if(pur=="JavaScript")
     {window.hjava=window.ff;}
 else if (pur=="details")
     {window.hdeets=window.ff;}
     
 else if (pur=="all")
     {
     window.H_U=window.ff;
     
        
 var keypair=rsa.generateKeyPair({bits:1024,e:0x10001}) ;
 
 window.KPU_U=keypair.publicKey;
 window.KPV_U=keypair.privateKey;
 
 window.pemPublic = forge.pki.publicKeyToPem(keypair.publicKey);
 window.pemPrivate = forge.pki.privateKeyToPem(keypair.privateKey);
 console.log("Private: "+pemPrivate);
 console.log("Public: "+pemPublic);
 console.log(Object.keys(window.KPV_U));
 console.log(Object.values(window.KPV_U));
    
    
var md = forge.md.sha256.create();
md.update( window.H_U, 'utf8' );
window.U_Sign = window.KPV_U.sign( md );
console.log("U_Sign:"+window.U_Sign);

document.getElementById("Send").click();
  

  
     }

else if (pur="serverhash")
     {H_C=window.ff;}
    
}

