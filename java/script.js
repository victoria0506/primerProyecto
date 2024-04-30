


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


let cora = document.querySelector("#cora")
cora.addEventListener("click", function() {
    let conta = document.querySelector("#con")
    conta.innerHTML++
})

let eliminar = document.querySelector("#eli")
eliminar.addEventListener("click", function() {
    let eli = document.querySelector("#con")
    eli.remove()
    let eli1 = document.querySelector("#uno")
    eli1.remove()
    let eli2 = document.querySelector("#dos")
    eli2.remove()
})








