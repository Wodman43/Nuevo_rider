const  midiv = document.getElementById('midiv');
// const mibtn = document.getElementById('mibtn');
const tabla = document.getElementById('tabla');

const btn = document.getElementById('añadir');
const btn2 = document.getElementById('añadir2');

let array = [];



btn.addEventListener('click', () =>{
    midiv.classList.remove('ola')
    midiv.classList.add('modal');
});

btn2.addEventListener('click', () =>{
    midiv.classList.add('ola');
});


const settext = data=>{
    tabla.innerHTML = '';
    let head = document.createElement('thead');
    head.innerHTML = `<th>Identificacion</th>
    <th>Nombre</th>
    <th>Nota 1</th>
    <th>Nota 2</th>
    <th>Nota 3</th>
    <th>Nota def</th>
    <th>Funciones</th`;
array.forEach(e=>{
    console.log(e);
    let edit = document.createElement('button');
    edit.textContent = 'Editar';
    let save = document.createElement('button');
    save.textContent = 'Guardar';
    let eliminar1 = document.createElement('button');
    eliminar1.textContent= 'Eliminar'
    edit.addEventListener('click',editar);
    save.addEventListener('click',guardar);
    
    let tablita = document.createElement('tr');
    let ident = document.createElement('td');
    ident.innerHTML = `<td><input type='text' id='input1' value = ' ${e.id}' disabled = ""></td>`;
    let nombre = document.createElement('td');
    nombre.innerHTML =`<td><input type='text' id='input2' value = '${e.nom}' disabled = ""></td>`;
    let nota1 = document.createElement('td');
    nota1.innerHTML =`<td><input type='number' id='input3' value = '${e.nota[0]}' disabled = ""></td>`;
    let nota2 = document.createElement('td');
    nota2.innerHTML =`<td><input type='number' id='input4' value = '${e.nota[1]}' disabled = ""></td>`;
    let nota3 = document.createElement('td');
    nota3.innerHTML =`<td><input type='number' id='input5' value = '${e.nota[2]}' disabled = ""></td>`;
    let definitiva = document.createElement('td');
    definitiva.innerHTML = `<td><input type='number' id='input6' value = '${e.def}' disabled></td>`;
    tablita.appendChild(ident);
    tablita.appendChild(nombre);
    tablita.appendChild(nota1);
    tablita.appendChild(nota2);
    tablita.appendChild(nota3);
    tablita.appendChild(definitiva);
    tablita.appendChild(edit);
    tablita.appendChild(save);
    tablita.appendChild(eliminar1);
    head.appendChild(tablita);
    tabla.appendChild(head);
    // midiv.innerText = data;
    eliminar1.onclick = ()=>{
        elimar(e.ideli)
    }
})
}

function elimar (id){
console.log('borrado', id);
array = array.filter(e => e.ideli !== id);
settext();
}


    function editar() {
        let tales = document.querySelectorAll('input');
        tales.forEach(e => {
            e.disabled = false;
        });
    }

    // ... Código existente ...

// Agrega un evento 'click' al botón 'Guardar'
function guardar() {
    // Obtén los nuevos valores de los inputs editados
    const newId = document.getElementById('input1').value;
    const newNom = document.getElementById('input2').value;
    const newNota1 = document.getElementById('input3').value;
    const newNota2 = document.getElementById('input4').value;
    const newNota3 = document.getElementById('input5').value;
    
    // Encuentra el elemento correspondiente en el array y actualiza sus propiedades
    const updatedItemIndex = array.findIndex(e => e.ideli === e.ideli); // Reemplaza 'e.ideli' con el valor correcto para identificar el elemento a actualizar
    if (updatedItemIndex !== -1) {
        array[updatedItemIndex].id = newId;
        array[updatedItemIndex].nom = newNom;
        array[updatedItemIndex].nota[0] = parseFloat(newNota1); // Convierte a número
        array[updatedItemIndex].nota[1] = parseFloat(newNota2); // Convierte a número
        array[updatedItemIndex].nota[2] = parseFloat(newNota3); // Convierte a número
        // Puedes recalcular la nota definitiva aquí si es necesario
        // array[updatedItemIndex].def = calcularDefinitiva(newNota1, newNota2, newNota3);
    }

    // Vuelve a llamar a settext para actualizar la tabla con los nuevos valores
    settext();
};

// ... Resto del código ...

    
    



const getdata = () =>{
    return new Promise((resuleve,rechaza)=>{
    settext('¿Quieres Calcular?')
    setTimeout(()=>{
        resuleve(true);},100) 
    })
}

        const showdata = (notas,id,nom) =>{
           
            // let a = 0;
            // notas.forEach(e =>{
           
            //     let nose = a
            //     a++;
            //     objeto[nose] = e;
            // })

           

            return new Promise((resuleve1,rechaza1)=>{
            settext('Esperando Autorizacion');
            setTimeout(()=>{
                let suma = 0;
                // let multi = 0.03;
                // let resultado;
                notas.forEach(nota =>{ suma += nota;
                    // resultado = multi *nota;
                });
                suma = suma / notas.length;
                console.log(suma)
                // const todo = resultado;
                let objeto = {
                    ideli: Date.now(),
                    id:id,
                    nom:nom,
                    nota:notas,
                    def: suma
                }

                array = [...array,objeto]
                // let p1 = notas[0] * 0.03;
                // let p2 = notas[1] * 0.03;
                // let p3 = notas[2] * 0.03;
                // const todo = [p1,p2,p3];
              

                // console.log(todo);
                resuleve1({jugador:suma});
            },100)
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