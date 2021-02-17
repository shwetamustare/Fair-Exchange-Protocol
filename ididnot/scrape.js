// -*- coding: utf-8 -*-
/*
Created on Wed Jun 06 00:39:48 2018

@author: Shweta Mustare
*/

var el=document.getElementById('scrape');
   if(el){var file='index.html';
  el.addEventListener("click", function () {
        shaf(file);
    }, false);
  }
     


function shaf(file)
{
fetch(file)
  .then(response => response.text())
  .then(text => console.log("UnHASHED TEXT IS:\n"+text))
   .then(text=>sha256( text ).then(hash => console.log("Hash value is ------------\n"+hash)))

 
}

async function sha256(s)
{
	const msgBuffer=new TextEncoder('utf-8').encode(s);
    const hashBuffer= await crypto.subtle.digest('SHA-256',msgBuffer);
    const hashArray=Array.from(new Uint8Array(hashBuffer));
    const hashHex=hashArray.map(b=>('00'+b.toString(16)).slice(-2)).join('');
   
    
    ff=hashHex.toString();
console.log(ff);
var f=document.createTextNode("\nHash value of HTML:  "+ff);
document.getElementById("hashvalue").appendChild(f);

 return hashHex;
    
}




