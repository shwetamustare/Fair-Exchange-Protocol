#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var fetch=require('node-fetch');
var http = require('http');
var forge=require('node-forge');
var sha256 = require('js-sha256');
var md5=require('js-md5');
//window.U1="";

hspol="";
hsind="";
hsjava="";
hsdeets="";
hsall="";
H_U="";
KPU_U="";
U_Sign="";
deets="";
H_C="";
UReceipt="";
var signcheck;

var server = http.createServer(function(request, response) {
  console.log('Received request from ' + request.url);
  response.writeHead(404);
  response.end();
});

server.listen(1337, function() {
    console.log('Server is listening on port 1337.');
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false 
});

function isAllowedOrigin(origin) {
  console.log('Connection requested from origin ' + origin);

  valid_origins = [
    'http://localhost:8080',
    '127.0.0.1',
    'null'
  ];

  if (valid_origins.indexOf(origin) != -1) {
    console.log('Connection accepted from origin ' + origin);
    return true;
  }

  console.log('Origin ' + origin + ' is not allowed.')
  return false;
}

wsServer.on('connection', function(webSocketConnection) {
  console.log('Connection started.');
});

wsServer.on('request', function(request) {

  var connection = isAllowedOrigin(request.origin) ?
    request.accept('echo-protocol', request.origin)
    : request.reject();
    
    var rsa=forge.pki.rsa;
    var keypair=rsa.generateKeyPair({bits:1024,e:0x10001}) ;
    KPU_C=keypair.publicKey;
    KPV_C=keypair.privateKey;
    
    pemCPublic=forge.pki.publicKeyToPem(keypair.publicKey);
    pemCPrivate=forge.pki.privateKeyToPem(keypair.privateKey);
    
//-----------------------------------------------------------------------------------------------------------------
    
 shaf('http://localhost/ididnot/PrivacyPolicy.txt',"Policy");
  shaf('http://localhost/ididnot/index.html',"HTML");
  shaf('http://localhost/ididnot/sha256.js',"JavaScript");
  
  

  
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
    fs=sha256(text);
    //fs=md5(text);
    fs.toString(16);
    console.log("real-------"+pur+" "+fs);
    
if(pur=="Policy")
     {hspol=fs;}
 else if(pur=="HTML")
     {hsind=fs;}
 else if(pur=="JavaScript")
     {hsjava=fs;}
 else if (pur=="deets")
     {hsdeets=fs;}
     
 else if (pur=="all")
     {
     
       H_C=fs;
  
     }

    
}




//-------------------------------------------------------------------------------------

  connection.on('message', function(message) {

    var response = '';
    console.log('Received Message: ' + message.utf8Data);

    if (message.type === 'utf8') {

        message=message.utf8Data;
      switch (message) {
        case 'hi':
          response = 'Hey there';
          break;
        case 'hello':
          response = 'Hello to you too!';
          break;
        case 'xyzzy':
          response = 'Nothing happens.';
          break;
        case 'desu':
          response = 'Keep typing, man. Keep typing.';
          break;
        /*default:{
         response = "Hello. Uh... what am I supposed to do with '" +
          message.utf8Data + "'?";
          }*/
      }
      
      if(message.search("UReceipt")==0)
      {
          res=message.split("UReceipt");
          UReceipt=res[1];
          console.log("UReceipt recieved");
          if(UReceipt!=""){SendCReceipt(); }
                 
      }
      
      if(message.search("KPU_U")==0)
        {
              res=message.split("KPU_U");
              KPU_U=res[1];
              
              console.log("KPU_U Pem"+KPU_U);
              KPU_U=forge.pki.publicKeyFromPem(KPU_U);
              
              
          }
        
        
        if(message.search("H_U")==0)
        {
            res=message.split("H_U");
            H_U=res[1];
            console.log("recieved H_U");
            
            
        }
        
        
        
        if(message.search("U_Sign")==0)
        {
            res=message.split("U_Sign");
            U_Sign=res[1];
            console.log("recieved U_Sign");
            
           
        }
        
       
        
        
        if(message.search("deets")==0)
        {
            res=message.split("deets");
            deets=res[1];
            console.log("recieved deets");
            shafin(deets,"deets");
            
            calculatestuff();
            
        }
        
        
        
          
    
      connection.sendUTF(response); 
      
    }
    
    
    
    
 
  });
  
  function calculatestuff()
  {
          if(KPU_U!="" && H_U!="" && U_Sign!="" && deets!="")
          {
          
          var hsall=hspol+hsind+hsjava+hsdeets;
            console.log("all"+hsall);
            
      
            shafin(hsall,"all");
            
          console.log("all is sent");
          
        
          
          //check if H_U==H_C
          
          if(H_U==H_C )
            { console.log("H_U==H_C");
            }
            else {
                console.log("UserHash:"+H_U);
                console.log("ClientHash:"+H_C);
                console.log("H_U!=H_C");
                }
            
            //check if U_Sign is verified:
            var md = forge.md.sha256.create(); 
            md.update(H_U,'utf8'); 
            try{
                var verified = KPU_U.verify(md.digest().bytes(), U_Sign);
                console.log("Verified U_Sign:"+verified);
               
                SendStuff(hsall);
                
                }
            catch(err){
                console.log("not verified U_Sign");
                
                }
                
             
          
          }
  
  
  }

function SendStuff(hsall){
   
       
        connection.sendUTF("KPU_C"+pemCPublic);
        connection.sendUTF("A_C"+hsall);
        
        var md = forge.md.sha256.create();
        md.update( H_C, 'utf8' );
        var C_Sign =KPU_U.encrypt(md.digest().bytes());
        console.log("C_Sign:"+C_Sign);
        connection.send("C_Sign"+C_Sign);
    
    }
    
    function SendCReceipt(){
    var crc=forge.md.sha256.create();
          crc.update(H_C, 'utf8');
          var CReceipt= KPU_C.encrypt(crc.digest().bytes());
          console.log("C_Receipt sent");
          connection.send("CReceipt:"+CReceipt);
    
    }



  connection.on('close', function(reasonCode, description) {
      console.log(connection.remoteAddress + ' has been disconnected.');
  });
  
  
});
