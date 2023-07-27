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
const result = document.getElementById('resultado');

function Enviar(meses,años,tri,pg,competencia){

    const nuevo = [meses,años,tri,pg,competencia];
    return nuevo;
}

function unafun() {
    const recibir = Enviar(meses,años,tri,pg,competencia);
    result.textContent = `${recibir[0]} ${recibir[1]} ${recibir[2]} ${recibir[3]} ${recibir[4]}`;
    console.log(recibir);
   
}




