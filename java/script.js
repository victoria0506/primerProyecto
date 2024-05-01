

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
btninfo.addEventListener("click", function () {
    alert("Gracias por su interes")

    //variable del h4 para la informacion del perfil de Github
    let mens = document.querySelector("#dos")
    mens.innerHTML = " Más proyectos : Github Victoria0506 "
})

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










