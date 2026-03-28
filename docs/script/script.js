const corOriginal=getComputedStyle(document.body).backgroundColor;

function alterarFundo(){
  document.body.style.backgroundColor= "white";
}

function voltarFundo(){
  document.body.style.backgroundColor= corOriginal;
}
