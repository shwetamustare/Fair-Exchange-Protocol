(function () {
    
  var ws = new WebSocket('ws://localhost:1337', 'echo-protocol');
  var response
  response=document.getElementById("response");
  
  ws.onopen = function (event) {
    onOpen(event)
  }

  ws.onmessage = function (event) {
    onMessage(event)
  }

  ws.onclose = function (event) {
    console.log('Connection closed.');
  }

  ws.onerror = function (event) {
    onError(event)
  }
  
  
   function onOpen(event)
  {
  
       document.getElementById('Send').addEventListener('click', function (event) {
    event.preventDefault();

   ws.send("KPU_U"+window.pemPublic);
   ws.send("H_U"+window.H_U);
   ws.send("U_Sign"+window.U_Sign);
   ws.send("deets"+window.deets);
   console.log("Sent 1st part user-server");
    
  });
  
  
  document.getElementById('Receipt').addEventListener('click',function(event){
          ws.send("UReceipt"+window.UReceipt);
            console.log("UReceipt sent");
  })
  
  }
 
          function onMessage(event)
          { 
            text=event.data;
             if(text.search("KPU_C")==0)
             {  
                 res=text.split("KPU_C");
                 window.pemCPublic=res[1];
                 
             }
             
             if(text.search("A_C")==0)
             {  
                 res=text.split("A_C");
                 window.A_C=res[1];
                 console.log("server hash:"+window.A_C);
             }
             
             if(text.search("C_Sign")==0)
             {
                 res=text.split("C_Sign");
                 window.C_Sign=res[1];
                 console.log("C_Sign:"+window.C_Sign);
                 if(window.C_Sign && window.hsall != "")
                  {
                      VerifyHashAndDecrypt();          
                       
                  }
                  
             }
             
             
             if(text.search("CReceipt")==0)
             {
                 res=text.split("CReceipt");
                 window.CReceipt=res[1];
                 console.log("Received CReceipt");
                 
                 var end = new Date().getTime();
                 console.log("End Time: "+end);
                 var elapsed = end - window.start;
                 console.log("Time taken to execute protocol: "+elapsed);
                      
                 //ws.close();
             }
          }
  
 
  
 
	
})();
