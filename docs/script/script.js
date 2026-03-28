const corOriginal=getComputedStyle(document.body).backgroundColor;

function alterarFundo(){
  let cor = prompt("Digite uma cor (de preferência em binário):");

  if (cor) {
  document.body.style.backgroundColor= cor;
  }
}
function voltarFundo(){
  document.body.style.backgroundColor= corOriginal;
}
