//DOM
 let boton = document.getElementById("calcular");
 let error=boton.addEventListener('click',calcular)
 const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
   const DATO = document.getElementById('peso').value
   //validamos que se cargue un dato:
   if (DATO > 0){
       ERROR.style.display = 'none'
       let flujo = calcFlujo(DATO);
       let mantenimiento = flujo*1.5;
       FLU.innerHTML = flujo + ' cc/hr';
       MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
       FLU.style.display = 'block';
       MAN.style.display = 'block';
   } else {
       ERROR.style.display = 'block';
       FLU.style.display = 'none';
       MAN.style.display = 'none';
   }
}) 
function calcFlujo(peso){
   let resto = peso;
   let flujo = 0;
   if (resto>20){
       let aux = resto-20;
       flujo += aux*1;
       resto -= aux;
   } 
   if (resto>10){
       let aux = resto-10;
       flujo += aux*2;
       resto -= aux;
   }
   flujo += resto*4;
   return flujo;
}
function calcular(){
    let peso= document.getElementById('peso').value
    
 if (peso<=30){
    segar(peso);
    }else{
    superficie(peso);
    }
    //de atras para adelante
    function segar(valor){
       
          if(valor>20){
            
           resultado= (((valor-20)*20)+1500);
          console.log(resultado);
          dia.innerHTML="Diario" + (((valor-20)*20)+1500) + "cc"
          dia.style.display="block"
          flu.innerHTML="flujo" + (((valor-20)*20)+1500) + "cc"
          di.style.display="block"
        }  else if(valor>10){
           resultado= (((valor-10)*50)+1000);
           console.log(resultado);
          dia.innerHTML="Diario" + (((valor-10)*50)+1000) + "cc"
          dia.style.display="block"
          flu.innerHTML="flujo" + (((valor-10)*50)+1000) + "cc"
          di.style.display="block"
        }  else{
            resultado=valor*100;
            console.log(resultado);
            dia.innerHTML="Diario" + valor*100 + "cc"
            dia.style.display="block"
            flu.innerHTML="flujo" + valor*100 + "cc"
            di.style.display="block"
        }
        console.log("el volumen diario  es: " + resultado);   
         console.log("el valor del mantenimiento es: " + resultado/24);
         console.log("Y el valor de mantemiento + medio mantenimiento es: " + (resultado+(resultado/2)));
    }
    function superficie(valor){
        resultado=(((valor*4)+7)/(valor+90));
    }
}