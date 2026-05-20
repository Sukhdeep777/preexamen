let btn = document.querySelector(".button")
let div = document.querySelector(".div")
let btnL = document.querySelector(".limpiar")
let input = document.querySelector(".nom")
let select = document.querySelector("#select")
let btnA = document.querySelector(".btn3")
let divA = document.querySelector(".Alumnos")
let inputimg = document.querySelector(".img")
let divimg = document.querySelector(".limitado")
let divSection = document.querySelector(".divsection")
let btnsection = document.querySelector(".btnsection")
let marca = document.querySelector(".marca")
let modelo = document.querySelector(".modelo")
let precio = document.querySelector(".precio")
let selectG = document.querySelector("#guitarra")
let btnG = document.querySelector(".iG")
let inputMarca = document.querySelector(".marca1")
let resultado = document.querySelector(".resultado")

function click(){
    console.log("Boton Pulsado")
    div.innerHTML = "Texto desde JS"
    div.classList.add("divContenido")
}

function limpiar(){
    div.innerHTML = ""
    div.classList.remove("divContenido")
}

function iAlumno(){
    divA.innerHTML = `${input.value} - ${select.value}`
    divimg.innerHTML = `<img src="${inputimg.value}">`
}

btn.addEventListener("click",click)
btnL.addEventListener("click",limpiar)
btnA.addEventListener("click",iAlumno)

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
    for(let i = 0; i <guitarras.length;i++){
        divSection.innerHTML += `<div class="bg-white p-5 border rounded-xl w-fit mx-auto">
        <h3>${guitarras[i].marca} ${guitarras[i].modelo}</h3>
        <p>Tipo: ${guitarras[i].tipo}</p>
        <p>Precio: ${guitarras[i].precio}</p>
        </div>`
    }
}

pintarGuitarras(pintarGuitarras)

function addG(){
    guitarras.push({id: guitarras.length+1, marca: marca.value, modelo: modelo.value, tipo: selectG.value, precio: Number(precio.value)})
    divSection.innerHTML = ""
    for(let i = 0; i <guitarras.length;i++){
        divSection.innerHTML += `<div class="bg-white p-5 border rounded-xl w-fit mx-auto">
        <h3>${guitarras[i].marca} ${guitarras[i].modelo}</h3>
        <p>Tipo: ${guitarras[i].tipo}</p>
        <p>Precio: ${guitarras[i].precio}</p>
        </div>`
    }
}

btnG.addEventListener("click",addG)

function mostrar(){
   
    resultado.innerHTML = ""
    let texto = inputMarca.value
    let ul = "<ul>"
    for(let i=0;i < guitarras.length; i++){
        console.log(guitarras[i].marca)
        console.log(texto)
        if (guitarras[i].marca == texto){
           ul+=`<li>${guitarras[i].marca} - ${guitarras[i].modelo}</li>`
        }   
    }
    resultado.innerHTML = "</ul>" + ul
}
inputMarca.addEventListener("input",mostrar)
