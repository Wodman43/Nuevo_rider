// const boton = (nota1,nota2,nota3) => {
// let arreglo = [nota1, nota2, nota3];

// midefinitiva = nueva(arreglo,porcentaje);

// console.log(midefinitiva);





    
// };

// function porcentaje(suma){
//    let p1 = suma[0] *0.03
//    let p2 = suma[1] *0.03
//    let p3 = suma[2] *0.03
//     // console.log(p1 , p2 , p3);
//     let mostrar = [p1, p2, p3];

//     return mostrar;
    
// }



// const nueva = (arreglo,porcentaje) => {
//     let suma = 0;
//     arreglo.forEach(nota => ( suma += nota));
//    suma = suma / arreglo.length ;

// //   porcentaje(arreglo);
//   console.log(porcentaje(arreglo));
//    return suma;
  
// }  





const boton = (nota1,nota2,nota3) => {
   return new Promise((resolve) => {
           resolve([nota1, nota2, nota3]);
   });
};

const porcentaje = (notas) => {
   return new Promise((resolve) => {
       const p1 = notas[0] * 0.03;
       const p2 = notas[1] * 0.03;
       const p3 = notas[2] * 0.03;
       resolve([p1, p2, p3]);
   });
};

const nueva = () => {
   boton().then(notas => {
       let suma = 0;
       notas.forEach(nota => suma += nota);
       suma = suma / notas.length;
       porcentaje(notas);

   });
}

nueva();


