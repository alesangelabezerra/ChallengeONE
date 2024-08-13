let campoTexto = document.querySelector("textarea");
let btnCodificar = document.getElementById("btnCodificar");
let btnDecodificar = document.getElementById("btnDecodificar");

campoTexto.addEventListener("keypress", (e) => {
  if (!verificarCaractere(e)) {
    e.preventDefault();
  }
});

function verificarCaractere(e) {
  const caractere = String.fromCharCode(e.keyCode);
  const padrao = "[a-zA-Z0-9]";

  if (caractere.match(padrao)) {
    return true;
  } else {
    console.log("Caracter especial digitado " + caractere);
  }
}

campoTexto.addEventListener("input", () => {
  if (campoTexto.value === "") {
    btnCodificar.classList.remove("ativo");
    btnCodificar.classList.add("inativo");

    btnDecodificar.classList.remove("ativo");
    btnDecodificar.classList.add("inativo");
  } else {
    btnCodificar.disabled = false;
    btnCodificar.classList.remove("inativo");
    btnCodificar.classList.add("ativo");

    btnDecodificar.disabled = false;
    btnDecodificar.classList.remove("inativo");
    btnDecodificar.classList.add("ativo");
  }
});

function inicializarPagina() {
  let campoTexto = document.querySelector("textarea");
  let campoResultado = document.getElementById("resultado");

  let imagemOculta = document.querySelector("aside img");
  let textoOculto = document.querySelector("aside p");
  let btnCopiar = document.querySelector("#btnCopiar");

  campoResultado.style.display = "none";
  btnCopiar.style.display = "none";

  imagemOculta.style.display = "block";
  textoOculto.style.display = "block";

  campoTexto.focus();
}

function codificarTexto() {
  let campoTexto = document.querySelector("textarea");
  let campoResultado = document.getElementById("resultado");

  let imagemOculta = document.querySelector("aside img");
  let textoOculto = document.querySelector("aside p");
  let btnCopiar = document.querySelector("#btnCopiar");

  campoResultado.style.display = "block";
  btnCopiar.style.display = "block";

  imagemOculta.style.display = "none";
  textoOculto.style.display = "none";

  let texto = campoTexto.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  let textoCodificado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  campoResultado.innerText = textoCodificado;
  campoTexto.value = "";

  btnCodificar.classList.remove("ativo");
  btnCodificar.classList.add("inativo");

  btnDecodificar.classList.remove("ativo");
  btnDecodificar.classList.add("inativo");

  campoTexto.focus();
}

function decodificarTexto() {
  let campoTexto = document.querySelector("textarea");
  let campoResultado = document.getElementById("resultado");

  let imagemOculta = document.querySelector("aside img");
  let textoOculto = document.querySelector("aside p");
  let btnCopiar = document.querySelector("#btnCopiar");

  campoResultado.style.display = "block";
  btnCopiar.style.display = "block";

  imagemOculta.style.display = "none";
  textoOculto.style.display = "none";

  let texto = campoTexto.value;

  let textoDecodificado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  campoResultado.innerText = textoDecodificado;
  campoTexto.value = "";

  btnCodificar.classList.remove("ativo");
  btnCodificar.classList.add("inativo");

  btnDecodificar.classList.remove("ativo");
  btnDecodificar.classList.add("inativo");

  campoTexto.focus();
}

function copiarTexto() {
  let campoResultado = document.getElementById("resultado");
  navigator.clipboard.writeText(campoResultado.innerHTML);
}

inicializarPagina();
