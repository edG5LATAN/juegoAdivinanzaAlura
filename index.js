const contenedor=document.querySelector(".contenedor-mentalista")
const numero=document.querySelector(".numero")
const respuesta=document.querySelector(".respuesta")
const boton=document.querySelector(".btn")
const cantidad=document.querySelector(".cantidad")
const error=document.querySelector(".error")
const reset = document.querySelector(".reset")

const random=Math.floor(Math.random()*50+1)
let contador=0


// cantidad.textContent=`el numero es ${random}`;
error.textContent=`Numero intentos: ${contador}`
numero.value=""
respuesta.value=""

boton.addEventListener("click",()=>{
  
  if(numero.value>0 && numero.value!=""){
    contador++
   error.textContent=`Numero intentos ${contador}`
   if(contador!=5){
    if (numero.value==random) {
        respuesta.value="GANASTE" 
        contenedor.classList.add("green")
    } else if(numero.value<random) {
       respuesta.value="ingrese un numero mayor"
       numero.value=""

    }else if(numero.value>random){
        respuesta.value="ingrese un numero menor"
        numero.value=""
    }
   }else{
    respuesta.value="PERDISTE" 
        contenedor.classList.add("red")
   }
    
  }else{
    error.textContent="solo numeros y no en vacio"
  }    
})
reset.addEventListener("click",()=>{
    window.location.reload()
})







