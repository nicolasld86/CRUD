import {validarCodigo, validarNumeros, validarURL, validarGeneral, validarCampoRequerido} from "./validaciones.js"
import {Producto} from "./productoClass.js"
//trae los campos input/textarea
let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad")
let url = document.querySelector("#url")
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion")
let formulario = document.querySelector("#formProducto")
let listaProductos = []

cargaInicial();

// agregar el evento
codigo.addEventListener("blur", ()=>{validarCodigo(codigo)})
cantidad.addEventListener("blur", ()=>{validarNumeros(cantidad)})
url.addEventListener("blur", ()=>{validarURL(url)});
producto.addEventListener("blur", ()=>{validarCampoRequerido(producto)});
descripcion.addEventListener("blur", ()=>{validarCampoRequerido(descripcion)});
formulario.addEventListener("submit", guardarProducto)

function guardarProducto(e){
e.preventDefault();

//verificar todas las validaciones
if(validarGeneral()){
    //tengo que crear el producto
    console.log("aqui creo el producto")
    agregarProducto();
}else{
    //aqui no hacemos nada
    console.log("no deberia hacer nada")
}
}

function agregarProducto(){
    //crear un objeto Producto
    let productoNuevo = new Producto(codigo.value, producto.value, descripcion.value, cantidad.value, url.value)
    
    
    //cargar el producto dentro del arrgelo
    listaProductos.push(productoNuevo);
    console.log(listaProductos)

    // all arreglo de productos lo almaceno  en localstorage
    localStorage.setItem("arregloProductos", JSON.stringify(listaProductos));

    //limpiar el formulario
    limpiarFormulario();
    
    //mostrar un mensaje al usuario


    //cargar el producto nuevo en la fila de la tabla
    crearFilas(productoNuevo)

    }

function limpiarFormulario(){

    //reset limpia los value
    formulario.reset();

    //limpiar los estilos
    codigo.className = "form-control"
    cantidad.className = "form-control"
    url.className = "form-control"
    producto.className = "form-control"
    descripcion.className = "form-control"

}

function cargaInicial (){
    // traer los productos del local storage si los hubiere sino dejar el arreglo vacio
    listaProductos = JSON.parse(localStorage.getItem("arregloProductos"))  || []

    //si hay prodcutos dentro del arrgelo entonces los muestro en la tabla


    listaProductos.forEach((itemProducto)=>{
        //codigo que se ejecuta por cada elemnto del arreglo
        crearFilas(itemProducto);
    });
    
}

function crearFilas(itemProducto){
    let tabla = document.querySelector("#tablaProducto");
    console.log(itemProducto)
    tabla.innerHTML += `<tr>
    <th scope="row">${itemProducto.codigo}</th>
    <td>${itemProducto.nombre}</td>
    <td>${itemProducto.descripcion}</td>
    <td>${itemProducto.cantidad}</td>
    <td>${itemProducto.url}</td>
    <td>
      <button class="btn btn-warning mb-2" onclick="prepararEdicion(${itemProducto.codigo})">Editar</button>
      <button class="btn btn-danger">Borrar</button>
    </td>
  </tr>`
}

window.prepararEdicion = (codigoProducto)=>{
console.log(codigoProducto)
//buscar el objeto
let productoBuscado = listaProductos.find((itemProducto)=>{return itemProducto.codigo == codigoProducto})
console.log(productoBuscado)
//mostrarlo en el formulario
codigo.value = productoBuscado.codigo;
cantidad.value = productoBuscado.cantidad;
url.value = productoBuscado.url;
descripcion.value = productoBuscado.descripcion;
producto.value = productoBuscado.nombre;

}