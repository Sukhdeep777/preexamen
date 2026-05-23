let btnM = document.querySelector(".mostrar")
let divM = document.querySelector(".dmostrar")
let btnL = document.querySelector(".limpiar")
let inombre = document.querySelector("#nombre")
let selectn = document.querySelector("#selectn")
let btnI = document.querySelector(".insertar")
let divA = document.querySelector(".alumnos")
let inputI = document.querySelector(".imagen")
let divI = document.querySelector(".imagend")
let divG = document.querySelector(".guitarras")
let marca = document.querySelector(".marca")
let modelo = document.querySelector(".modelo")
let precio = document.querySelector(".precio")
let selectT = document.querySelector("#selecttipo")
let insGui = document.querySelector(".insertarguitarra")
let buscar = document.querySelector(".buscar")
let buscardiv = document.querySelector(".buscardiv")

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

const guitarras = [
  {
    id: 1,
    marca: "Fender",
    modelo: "Stratocaster",
    tipo: "Eléctrica",
    precio: 1200
  },
  {
    id: 2,
    marca: "Gibson",
    modelo: "Les Paul",
    tipo: "Eléctrica",
    precio: 1800
  },
  {
    id: 3,
    marca: "Yamaha",
    modelo: "FG800",
    tipo: "Acústica",
    precio: 250
  },
 {
    id: 4,
    marca: "Fender",
    modelo: "Telecaster",
    tipo: "Eléctrica",
    precio: 1200
  }

 ];

 
function pintarGuitarras(){
    for(let i = 0; i <guitarras.length; i++){
        divG.innerHTML += `<div class="bg-white p-5 gap-2 border w-fit mx-auto rounded-xl mt-5"> 
        <h3>${guitarras[i].marca} ${guitarras[i].modelo}</h3> 
        <p>Tipo ${guitarras[i].tipo}</p> 
        <p>Precio: ${guitarras[i].precio}</p>
        </div>`
    }
}

pintarGuitarras(pintarGuitarras)

function insertGuit(){
    divG.innerHTML = ""
    guitarras.push({id: guitarras.length+1,marca: marca.value, modelo: modelo.value, tipo: selectT.value, precio: Number(precio.value)})
    pintarGuitarras(pintarGuitarras)
}

insGui.addEventListener("click",insertGuit)

function buscarmarca(){
    buscardiv.innerHTML = ""
    let ul = "<ul>"
    let texto = buscar.value
    for(let i = 0; i<guitarras.length; i++){
        console.log(guitarras[i].marca)
        console.log(texto)
        if(guitarras[i].marca == texto){
            ul+= `<li>${guitarras[i].marca} - ${guitarras[i].modelo}</li>`
        }
    }
    buscardiv.innerHTML = ul + "</ul>"
}

buscar.addEventListener("input",buscarmarca)