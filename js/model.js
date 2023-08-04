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


function Enviar(meses,años,tri,pg,competencia,fecha){ 
    // const result = document.getElementById('resultado');
    // result.textContent = (meses+" "+años+" "+tri+" "+pg+" "+competencia);
    let nuevo = [meses,años,tri,pg,competencia,fecha];
    let nuevo1 = nuevo[5];
    let recibir = unafun(nuevo1);

    let mostrar = pasar(recibir);
 
    console.log(mostrar);

  
}


function unafun(nuevo1){
    // let result = document.getElementById('resultado');
    // result.textContent = `${nuevo[0]} ${nuevo[1]} ${nuevo[2]} ${nuevo[3]} ${nuevo[4]}`;
    // console.log(nuevo);

    let nuevo2 = nuevo1.split("-");
    let mes = nuevo2[1];
    // console.log(mes);
    return mes;
}

function pasar(nuevo4){
    if(nuevo4 === '01'){
        return 'Enero';
    }else if(nuevo4 === '02'){
        return 'Febrero';
    }else if(nuevo4 === '03'){
        return 'Marzo';
    }else if(nuevo4 === '04'){
        return 'Abril';
    }else if(nuevo4 === '05'){
        return 'Mayo';
    }else if(nuevo4 === '06'){
        return 'Junio';
    }else if(nuevo4 === '07'){
        return 'Julio';
    }else if(nuevo4 === '08'){
        return 'Agosto';
    }else if(nuevo4 === '09'){
        return 'Septiembre';
    }else if(nuevo4 === '10'){
        return 'Octubre';
    }else if(nuevo4 === '11'){
        return 'Noviembre';
    }else if(nuevo4 === '12'){
        return 'Diciembre';
    }
}

const diseño = document.getElementById('competencia');

diseño.addEventListener('input',diseño1);
const papa = document.getElementById('padre');

function diseño1(){
   if(diseño.value === "Diseño"){
    console.log('Diseño')
   
    const contenido = document.createElement('select');
    const hijitos = document.createElement('option');
    hijitos.innerHTML = `<option>Resultado1</option>`;
    contenido.appendChild(hijitos);
    papa.appendChild(contenido);
   }else if(diseño.value === 'Analisis'){
    console.log('Analisis')
    const contenido1 = document.createElement('select');
    const hijitos1 = document.createElement('option');
    hijitos1.innerHTML = `<option>Resultado1</option>`;
    contenido1.appendChild(hijitos1);
    papa.appendChild(contenido1);
   }
    

}


// const analisis = document.getElementById('analisis');

// analisis.addEventListener('',analisisi1);

// function analisisi1 (){
//     console.log('analisis')
    

// }


