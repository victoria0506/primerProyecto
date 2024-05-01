

//variale del input
let input = document.querySelector("#input")

//variable del boton de mensaje
let boton = document.querySelector("#boton")

//funcion del boton 
boton.addEventListener("click", function() {

    //variable de la h4 donde se va a imprimir el mensaje
    let mensaje = document.querySelector("#uno")

    //validacion de si hay o no hay mensaje para enviar
    if (input.value == "") {
        alert("No agregaste mensaje")
    }else{
        mensaje.innerHTML = "Su mensaje es : " + input.value
        alert("Gracias por su mensaje")
    }
})

//variable del boton de más información 
let btninfo = document.querySelector("#boton1")

//funcion de el btn más información 

//Variable del btn del corazón 
let btncora = document.querySelector("#cora")

//funcion del btn de corazón
btncora.addEventListener("click", function() {

    //variable de la etiqueta p donde se va a imprimir los me gusta
    let conta = document.querySelector("#con")

    //el innerHTML++ es para que se valla imcrementando de uno en uno
    conta.innerHTML++
})

//Variable del btn para eliminar todo las informaciones
let eliminar = document.querySelector("#eli")

//funcion del btn de eliminar
eliminar.addEventListener("click", function() {
    //variable de la etiqueta p de likes 
    //el metodo remove() es para remover lo que agregamos 
    // aqui removemos lo agregado en las etiquetas p de contador
    //y en las h4 de mensaje y informacion
    let eli = document.querySelector("#con")
    eli.remove()
    let eli1 = document.querySelector("#uno")
    eli1.remove()
    let eli2 = document.querySelector("#dos")
    eli2.remove()
})

// este if nos dice que si todo lo que hacemos dentro de el btnModal es verdad
//empezar a realizar las funcionnes
if(document.getElementById("btnModal")){
    //variable del div principal donde va toda la informacion
    let modal = document.getElementById("Modal")

    //variable del boton que va a realizar la funcion de lanzar la ventana
    let btn = document.getElementById("btnModal")

    //variable de la x que va a cerrar esta ventana el [0] es para que se tome la primera posicion que es la x
    let span = document.getElementsByClassName("cerrar")[0]

    //la variable del body es para lograr 
    let body = document.getElementsByTagName("body")[0]

    //funcion del btn 
    btn.onclick = function() {
        //el metodo style se va a utilizar para manipular el atributo style de el elemento 
        //le decimos que la variable modal que es nuestro div, va a ocupar un espacio especifico
        modal.style.display = "block"

        //le decimos a el body que va a tenes una posicion estatica
        body.style.position = "static"

        //que va a estar a un 100% del alto del body
        body.style.height = "100%"
        
    }
    //funcion de la etiqueta span donde se encuentra la x que va a cerrar la ventana 
    span.onclick = function() {
        
        //utilizamos para que la informacion dentro de la ventana de se vea si no hasta tocar el boton
        modal.style.display = "none"

        //
        body.style.position = "inherit"

        //
        body.style.height = "auto"

        //
        body.style.overflow = "visible"
    }

    //window va a representar el documento de la ventana que se va a abrir
    window.onclick = function(event) {
        //
        if (event.target == modal) {
            //
            modal.style.display = "none"
            //
            body.style.position = "inherit"
            //
            body.style.height = "auto"
            //
            body.style.overflow = "visible"
        }
    }
}










