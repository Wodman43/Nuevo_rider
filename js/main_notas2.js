const  midiv = document.getElementById('midiv');
// const mibtn = document.getElementById('mibtn');

const settext = data=>{
midiv.textContent = data;
}
const getdata = () =>{
    return new Promise((resuleve,rechaza)=>{
    settext('¿Quieres Calcular?')
    setTimeout(()=>{
        resuleve(true);},2000) 
    })
}

        const showdata = (notas) =>{
            let objeto = {};
            notas.forEach(e =>{
                let nose = 'nota'+e;
                objeto[nose] = e;
            });
          
            console.log(objeto);

            return new Promise((resuleve1,rechaza1)=>{
            settext('Esperando Autorizacion');
            setTimeout(()=>{
                let suma = 0;
                let multi = 0.03;
                let resultado;
                notas.forEach(nota =>{ suma += nota;
                    resultado = multi *nota;
                });
                suma = suma / notas.length;
                console.log(suma)
                const todo = resultado;
                // let p1 = notas[0] * 0.03;
                // let p2 = notas[1] * 0.03;
                // let p3 = notas[2] * 0.03;
                // const todo = [p1,p2,p3];
              

                console.log(todo);
                resuleve1({jugador:suma,porcen:todo});
            },2000)
        })
        }

        const boton =(nota1,nota2,nota3)=>{
            getdata().then(permitido=>{
                if(permitido){
                   return showdata([nota1,nota2,nota3]);
                    }
                
        }).then(user=>{
            settext(user.jugador);
            // settext(user.porcen);
        });

    }