let btnM = document.querySelector(".mostrar")
let divM = document.querySelector(".dmostrar")
let btnL = document.querySelector(".limpiar")
let inombre = document.querySelector("#nombre")
let selectn = document.querySelector("#selectn")
let btnI = document.querySelector(".insertar")
let divA = document.querySelector(".alumnos")
let inputI = document.querySelector(".imagen")
let divI = document.querySelector(".imagend")

function pulsado(){
    console.log("Boton Pulsado")
    divM.innerHTML = "Texto desde JS"
    divM.classList.add("divContenido")
}

function limpiar(){
    divM.classList.remove("divContenido")
    divM.innerHTML = ""
}

function insertar(){
    divA.innerHTML = `${inombre.value} - ${selectn.value}`
    divI.innerHTML = `<img src="${inputI.value}">`
}

btnM.addEventListener("click",pulsado)
btnL.addEventListener("click",limpiar)
btnI.addEventListener("click",insertar)