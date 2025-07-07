
let paragrafo=document.querySelector("button");

paragrafo.addEventListener("click", mostreMensagem);

function mostreMensagem() {
  document.getElementById("mensagem").innerText = "Você é capaz de alcançar grandes coisas!";
}