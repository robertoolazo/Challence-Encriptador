const inputTexto = document.querySelector("#texto");
const Resultado = document.querySelector("#presentar");
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");

const entrada = document.getElementById('entradaTexto');
const inputs = document.querySelectorAll('#entradaTexto input');
const expresiones = {
    mayusculasYAcentos: /[A-Z\u00C0-\u017F`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
    caracteresEspeciales: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
}

function validarF(e){
    if(expresiones.mayusculasYAcentos.test(e.target.value)){
        console.log('letra no apmitida')
        document.getElementById("mensajeDeError").style.display = "inline";
    } else{
        console.log('letra aprobada')
        document.getElementById("mensajeDeError").style.display = "none";
        document.getElementById("mensajeDeError2").style.display = "none";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarF )
    input.addEventListener('blur', validarF )
});

entrada.addEventListener('submit', (e) => {
    e.preventDefault();
});

function validar1(){
    if(inputTexto.value == ''){
        console.log('vacio');
        document.getElementById("mensajeDeError2").style.display = "inline";
    } else {
        encriptar()
        
    }
}
function validar2(){
    if(inputTexto.value == ''){
        console.log('vacio');
        document.getElementById("mensajeDeError2").style.display = "inline";
    } else {
        desencriptar();
    }
}


function mostrar(){
    document.getElementById("texto").validity;
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("presentar").style.display = "inline";
    document.getElementById("copiar").style.display = "inline";
}

function encriptar(){
    mostrar()
    var texto = inputTexto.value;
    var textoEncriptado = texto.replace(/e/gm,"enter").replace(/i/gm,"imes").replace(/a/gm,"ai").replace(/o/gm,"ober").replace(/u/gm,"ufat");
    
    Resultado.value = textoEncriptado;

}

function desencriptar(){
    mostrar();
    var textoEncriptado = inputTexto.value;
    var texto = textoEncriptado.replace(/enter/gm,"e").replace(/imes/gm,"i").replace(/ai/gm,"a").replace(/ober/gm,"o").replace(/ufat/gm,"u");

    Resultado.value = texto;
}
    
function copiar(){
    var mensajeEncriptado = Resultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


botonEncriptar.onclick = validar1 ;
botonDesencriptar.onclick = validar2;
botonCopiar.onclick = copiar;    
