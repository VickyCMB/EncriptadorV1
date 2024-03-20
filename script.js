var entradaTexto = document.querySelector(".cajaentrada");
var salidaTexto = document.querySelector(".cajasalida");
var mensaje = document.querySelector(".notexto");
var instruccion = document.querySelector(".indicacion");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar){
    return /^[a-z]+$/.test(textoValidar);
}

function encriptar() {
    var texto = entradaTexto.value;
    var textoFinal = "";
    if(!validar(texto)){
        alert("Texto no Válido!")
        return;
    }
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }    
    entradaTexto.value = "";
    salidaTexto.value = textoFinal;
    ocultar();
}

function desencriptar() {
    var texto = entradaTexto.value;
    var textoFinal = "";
    if(!validar(texto)){
        alert("Texto no Válido!")
        return;
    }
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }        
    }
    entradaTexto.value = "";
    salidaTexto.value = textoFinal;
    ocultar();
}

function ocultar(){
    salidaTexto.style.background = "white";
    mensaje.style.display = "none";
    instruccion.style.display = "none";
    btnCopiar.style.display = "";
}

function mostrar(){
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/imagen.png)";
    mensaje.style.display = "";
    instruccion.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar(){
    var copia =salidaTexto.value;
    navigator.clipboard.writeText(copia);
    
    var anuncio = document.querySelector(".notifica");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}