const  midiv = document.getElementById('midiv');
// const mibtn = document.getElementById('mibtn');
const tabla = document.getElementById('tabla');

let array = [];


const settext = data=>{
array.forEach(e=>{
    console.log(e);
    let tablita = document.createElement('tr');
    let ident = document.createElement('td');
    ident.innerHTML = `<td>${e.id}</td>`;
    let nombre = document.createElement('td');
    nombre.innerHTML =`<td>${e.nom}</td>`;
    let nota1 = document.createElement('td');
    nota1.innerHTML =`<td>${e.nota[0]}</td>`;
    let nota2 = document.createElement('td');
    nota2.innerHTML =`<td>${e.nota[1]}</td>`;
    let nota3 = document.createElement('td');
    nota3.innerHTML =`<td>${e.nota[2]}</td>`;
    tablita.appendChild(ident);
    tablita.appendChild(nombre);
    tablita.appendChild(nota1);
    tablita.appendChild(nota2);
    tablita.appendChild(nota3);
    tabla.appendChild(tablita);
    // midiv.innerText = data;
})
}
const getdata = () =>{
    return new Promise((resuleve,rechaza)=>{
    settext('¿Quieres Calcular?')
    setTimeout(()=>{
        resuleve(true);},2000) 
    })
}

        const showdata = (notas,id,nom) =>{
            let objeto = {
                id:id,
                nom:nom,
                nota:notas,
            };
            // let a = 0;
            // notas.forEach(e =>{
           
            //     let nose = a
            //     a++;
            //     objeto[nose] = e;
            // })

            array = [...array,objeto]

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

        const boton =(nota1,nota2,nota3,id,nom)=>{
            getdata().then(permitido=>{
                if(permitido){
                   return showdata([nota1,nota2,nota3],id,nom);
                    }
                
        }).then(user=>{
            settext(user.jugador);
            // settext(user.porcen);
        });

    }