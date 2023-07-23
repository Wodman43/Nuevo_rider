// const result = document.getElementById('resultado');
// const carga = document.getElementById('cargar');
// carga.addEventListener('click',datos);

// function datos () {
//     const meses = document.getElementById('meses').value;
//     const año = document.getElementById('años').value;
//     const compe = document.getElementById('competencia').value;
//     // const pierde = document.getElementById('pierde');
//     // const gana = document.getElementById('gana');
//     const tri = document.getElementById('tri').value;
// let check = document.querySelector('input[name="tipo"]:checked').value;
   
// result.children[0].textContent = (meses+" "+año+" "+tri+" "+check+" "+compe);

// //     if(pierde.checked){
// //         result.children[0].textContent = (meses+" "+año+" "+tri+" "+pierde.value+" "+compe);

// //      }else if(gana.checked){
// //          result.children[0].textContent = (meses+" "+año+" "+tri+" "+gana.value+" "+compe);
// //      }
   
  
// //     console.log(meses);
// //     console.log(año);
// //     console.log(tri);
// //     console.log(pierde);
// //     console.log(gana);
// //     console.log(compe);
// // console.log(check);
// }


function Enviar(meses,años,tri,pg,competencia){
    // const result = document.getElementById('resultado');
    // result.textContent = (meses+" "+años+" "+tri+" "+pg+" "+competencia);
    const nuevo = [meses,años,tri,pg,competencia];
    //  result.textContent = (nuevo);
    return nuevo;
}



function unafun(){
    const recibir = Enviar();
    const result = document.getElementById('resultado');
    result.textContent = recibir;
    console.log(recibir);
   
}

// unafun();


