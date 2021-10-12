 export function validarCampoRequerido (input){
    
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

export function validarCodigo (input){
    
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



export function validarNumeros(input){
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




export function validarURL(input){
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


export function validarGeneral(){
        
    let alerta = document.querySelector("#msjAlerta")
    //if (true/false)
if(validarCodigo(codigo) && validarCampoRequerido(producto) && validarCampoRequerido(descripcion) && validarNumeros(cantidad) && validarURL(url)){
    console.log("aqui tengo que crear el producto")
    alerta.className="alert alert-danger mt-4 d-none"
    return true;
}else {
    console.log("corregir datos")
    // aqui mostrar el alert del html
    ;
    alerta.className="alert alert-danger mt-4"
    return false;
}
}










