function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "successfully encrypted text";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.png";
  } else {
    muñeco.src = "./img/equis.png";
    tituloMensaje.textContent = "No message found";
    parrafo.textContent = "Enter the text you want to encrypt or decrypt";
    swal("Ooops!", "You must enter a text", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "successfully decrypted text";
      parrafo.textContent = "";
      muñeco.src = "./img/desencriptar.png";
    } else {
      muñeco.src = "./img/equis.png";
      tituloMensaje.textContent = "No message found";
      parrafo.textContent = "Enter the text you want to encrypt or decrypt";
      swal("Ooops!", "You must enter a text", "warning");
    }
}
