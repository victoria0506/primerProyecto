


let input = document.querySelector("#input")
let boton = document.querySelector("#boton")
boton.addEventListener("click", function() {
    let mensaje = document.querySelector("#uno")
    if (input.value == "") {
        alert("No agregaste mensaje")
    } else {
        mensaje.innerHTML = "Su mensaje es : " + input.value
        alert("Gracias por su mensaje")
    }
})

let boton1 = document.querySelector("#boton1")
boton1.addEventListener("click", function () {
    alert("Gracias por su interes")
    let mens = document.querySelector("#dos")
    mens.innerHTML = " Más proyectos : Github Victoria0506 "
})







