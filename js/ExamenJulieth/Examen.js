

    let nombres = prompt("Escribe tu nombre");
    let seleccion = parseInt(prompt("Elije un color: 1Rojo, 2Negro o 3Azul"))
    let apuesta = prompt("Escribe el valor de la apuesta (1-20)");
    let aleatorio = Math.floor(Math.random() * 50) +1

    if (seleccion === 1){ 
        
        for (let i = 0; i <apuesta; i++){
            if (i%3==0){
                let suma = suma + i;
                let resultado = suma + aleatorio;
                if (resultado< 60){
                    Document.write (`En esta oportunidad perdiste ${nombres} tienes un puntaje negativo de ${resultado} puntos `)
                } else {
                    document.write (`Nombre de usuario: ${nombres}`)
                    document.write (`Valor de la apuesta: ${apuesta}`)
                    Document.write (`Color seleccionado: ${seleccion}`)
                    document.write (`Puntaje obtenido: ${resultado}`)
                    document.write (`Felicitaciones ${nombres} haz ganado con un total de ${resultado} Puntos`)

            }
        }
        }

    }else if (seleccion === 2)
    for (let i = 0; i <apuesta; i++){
        let suma = suma + i;
        if (suma%2==1){
            suma = 0
            resultado = suma + apuesta;   
            Document.write (`En esta oportunidad perdiste ${nombres} tienes un puntaje negativo de ${resultado} puntos `)
        } else {
            document.write (`Nombre de usuario: ${nombres}`)
            document.write (`Valor de la apuesta: ${apuesta}`)
            Document.write (`Color seleccionado: ${seleccion}`)
            document.write (`Puntaje obtenido: ${resultado}`)
            document.write (`Felicitaciones ${nombres} haz ganado con un total de ${resultado} Puntos`)

    }
        }else if(seleccion === 3){
    for (let i = 0; i <apuesta; i++){
    if (
        (i%apuesta == 0)||
        (i%i == 0)){
            suma = suma + i;
            
            Document.write (`En esta oportunidad perdiste ${nombres} tienes un puntaje negativo de ${resultado} puntos `)
        } else {
            document.write (`Nombre de usuario: ${nombres}`)
            document.write (`Valor de la apuesta: ${apuesta}`)
            Document.write (`Color seleccionado: ${seleccion}`)
            document.write (`Puntaje obtenido: ${suma}`)
            document.write (`Felicitaciones ${nombres} haz ganado con un total de ${resultado} Puntos`)

    }
        }
    
}

    



