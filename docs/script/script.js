const corOriginal=getComputedStyle(document.body).backgroundColor;

function alterarFundo(){
  let cor = prompt("Digite uma cor (de preferência em hexadecimal):");

  if (cor) {
  document.body.style.backgroundColor= cor;
  }
}
function voltarFundo(){
  document.body.style.backgroundColor= corOriginal;
}

const list = []
const formulario = document.getElementById('form');
formulario.addEventListener('submit', function(event){
  event.preventDefault();
  const novoNome = document.getElementById('nome').value
  const novaSenha = document.getElementById('senha').value

  const novo = {
    nome: novoNome,
    senha: novaSenha,
  };
  list.push(novo);
  console.log(list);

  document.getElementById('nome').value = "";
  document.getElementById('nome').value = "";
});
    
