const boton = (nota1,nota2,nota3) => {
let arreglo = [nota1, nota2, nota3];

midefinitiva = nueva(arreglo,porcentaje);

console.log(midefinitiva);





    
};

function porcentaje(suma){
   let p1 = suma[0] *0.3
   let p2 = suma[1] *0.3
   let p3 = suma[2] *0.3
    // console.log(p1 , p2 , p3);
    let mostrar = [p1, p2, p3];

    return mostrar;
    
}



const nueva = (arreglo,porcentaje) => {
    let suma = 0;
    arreglo.forEach(nota => ( suma += nota));
   suma = suma / arreglo.length ;

  porcentaje(arreglo);
  console.log(porcentaje(arreglo))
   return suma;
  
}  



