
var txt=document.getElementById("txtar");
var txt2=document.getElementById("taille");
var txt3=document.getElementById("police");

function modifB(){
  event.preventDefault();
 txt.style.fontWeight="bold";
  return false;
}

function modifI(){
  event.preventDefault();
  txt.style.fontStyle="italic";
  return false;
}

function modifU(){
  event.preventDefault(); 
  txt.style.textDecoration="underline" ;
  return false;  
}
function modiftaille(){
  event.preventDefault();
  txt.style.fontSize=txt2.value;
  return false; 
}
function modif (){
  event.preventDefault();
  txt.style.fontFamily=txt3.value;
  return false; 
}

$("#bloc1").mouseover(function(){
  $("#web1").show();
  
});
  
  $("#bloc1").mouseleave(function(){
    $("#web1").hide();
  });

  $("#bloc2").mouseover(function(){
    $("#web2").show();
    
  });

  $("#bloc2").mouseleave(function(){
    $("#web2").hide();
    
  });
  $("#bloc3").mouseover(function(){
    $("#web3").show();
  });
  $("#bloc3").mouseleave(function(){
    $("#web3").hide();
  });
  $("#bloc4").mouseover(function(){
    $("#web4").show();
  });
  $("#bloc4").mouseleave(function(){
    $("#web4").hide();
  });  $("#bloc5").mouseover(function(){
    $("#web5").show();
  });
  $("#bloc5").mouseleave(function(){
    $("#web5").hide();
  });  $("#bloc6").mouseover(function(){
    $("#web6").show();
  });
  $("#bloc6").mouseleave(function(){
    $("#web6").hide();
  });
  
 