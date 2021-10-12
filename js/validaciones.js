function validarCampoRequerido (input){
    
    if(input.value.trim() != ""){
        console.log("el dato es correcto")
        input.className = "form-control is-valid"
        return true
    } else{
        console.log("corregir el dato")
        input.className = ("form-control is-invalid");
        return false
    }
};

function validarCodigo (input){
    
    if(input.value.trim() != "" && input.value.trim().length >= 3){
        console.log("el dato es correcto")
        input.className = "form-control is-valid"
        return true
    } else{
        console.log("corregir el dato")
        input.className = ("form-control is-invalid");
        return false
    }
};



function validarNumeros(input){
    //creamos la expresion regular
let patron = /^[0-9]{1,3}$/
if (patron.test(input.value)){
    input.className = "form-control is-valid"
    return true
}else{
    input.className = ("form-control is-invalid");
    return false
}
}




function validarURL(input){
//crear una expresion regular
let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
if(input.value.trim() != "" && patron.test(input.value.trim())){
    input.className = "form-control is-valid"
    return true
}else{
    input.className="form-control is-invalid"
    return false
}
}


function validarGeneral(e){
    // previene que recargue la pagina
    e.preventDefault();
    console.log("desde la funcion validarGeneral")
    let alerta = document.querySelector("#msjAlerta")
    //if (true/false)
if(validarCodigo(codigo) && validarCampoRequerido(producto) && validarCampoRequerido(descripcion) && validarNumeros(cantidad) && validarURL(url)){
    console.log("aqui tengo que crear el producto")
    alerta.className="alert alert-danger mt-4 d-none"
}else {
    console.log("corregir datos")
    // aqui mostrar el alert del html
    ;
    alerta.className="alert alert-danger mt-4"
}
}

//trae los campos input/textarea

let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad")
let url = document.querySelector("#url")
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion")
let formulario = document.querySelector("#formProducto")


console.log(producto)
console.log(descripcion)

// agregar el evento

codigo.addEventListener("blur", ()=>{validarCodigo(codigo)})
cantidad.addEventListener("blur", ()=>{validarNumeros(cantidad)})
url.addEventListener("blur", ()=>{validarURL(url)});
producto.addEventListener("blur", ()=>{validarCampoRequerido(producto)});
descripcion.addEventListener("blur", ()=>{validarCampoRequerido(descripcion)});
formulario.addEventListener("submit", validarGeneral)