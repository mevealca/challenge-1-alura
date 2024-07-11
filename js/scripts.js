/**
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"

  Permite evaluar el tamano de la pantalla
  console.log(window.screen.height);
  console.log(window.screen.width);
 */
  getYear();


  window.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('textoPanel');

    inputField.addEventListener('click', () => {
        inputField.select();
    });
});

function validarAcentos(texto) {
  if (texto) {
    let textoSinAcentos = texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return textoSinAcentos;
  }
  return "";
}

function textosMinusculas(texto) {
  if (texto) {
    let textosMinusculas = texto.toLowerCase();
    return textosMinusculas;
  }
  return "";
}

function corregirTexto (){
    let texto = document.getElementById('textoPanel').value;
    let textoResultado ='';
    if(texto){
        textoResultado = validarAcentos(texto);
        textoResultado = textosMinusculas(textoResultado);
        document.getElementById("textoPanel").value = textoResultado;
    }
return textoResultado;
}

function encriptarTexto() {
    let textoComprimido = corregirTexto();
    textoComprimido = textoComprimido.replace(/e/g, "enter");
    textoComprimido = textoComprimido.replace(/i/g, "imes");
    textoComprimido = textoComprimido.replace(/a/g, "ai");
    textoComprimido = textoComprimido.replace(/o/g, "ober");
    textoComprimido = textoComprimido.replace(/u/g, "ufat");
    return textoComprimido;
}

// Función para descomprimir el texto
function desencriptarTexto() {
    let textoDescomprimido = corregirTexto();
    textoDescomprimido = textoDescomprimido.replace(/enter/g, "e");
    textoDescomprimido = textoDescomprimido.replace(/imes/g, "i");
    textoDescomprimido = textoDescomprimido.replace(/ai/g, "a");
    textoDescomprimido = textoDescomprimido.replace(/ober/g, "o");
    textoDescomprimido = textoDescomprimido.replace(/ufat/g, "u");
    return textoDescomprimido;
}

function encriptar (){

    const resultado = encriptarTexto();
    if(resultado){
      document.getElementsByClassName('presentacion__panel__titulo')[0].innerHTML= '';
      document.getElementsByClassName('presentacion__panel__subtitulo')[0].innerHTML = resultado;
      document.getElementById('boton__copiar').removeAttribute('hidden')
    }else{
      document.getElementsByClassName('presentacion__panel__titulo')[0].innerHTML= 'Ningun Mensaje fue encontrado';
      document.getElementsByClassName('presentacion__panel__subtitulo')[0].innerHTML = 'Ingresa el texto que desees encriptar o desencriptar';
      document.getElementById('boton__copiar').setAttribute('hidden',true)
    }
   
}

function desencriptar (){
    const resultado = desencriptarTexto();
    if(resultado){
      document.getElementsByClassName('presentacion__panel__titulo')[0].innerHTML= '';
      document.getElementsByClassName('presentacion__panel__subtitulo')[0].innerHTML = resultado;
      document.getElementById('boton__copiar').removeAttribute('hidden')
    }else{
      document.getElementsByClassName('presentacion__panel__titulo')[0].innerHTML= 'Ningun Mensaje fue encontrado';
      document.getElementsByClassName('presentacion__panel__subtitulo')[0].innerHTML = 'Ingresa el texto que desees encriptar o desencriptar';
      document.getElementById('boton__copiar').setAttribute('hidden',true)
    }
   
}

function getYear(){
  let date = new Date();
  document.getElementsByClassName('footer__label')[0].innerHTML= `Miguel Eve` ;
  document.getElementsByClassName('footer__label__year')[0].innerHTML= `&nbsp; ${date.getFullYear()}` ;
}

async function copiarResultado (){

  let texto = document.getElementsByClassName('presentacion__panel__subtitulo')[0].innerHTML;

    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }

}

