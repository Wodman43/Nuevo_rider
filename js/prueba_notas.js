const midiv = document.getElementById('midiv');
const tabla = document.getElementById('tabla');
const btn = document.getElementById('añadir');
const btn2 = document.getElementById('añadir2');

let array = [];

btn.addEventListener('click', () => {
    midiv.classList.remove('ola')
    midiv.classList.add('modal');
});

btn2.addEventListener('click', () => {
    midiv.classList.add('ola');
});

const settext = data => {
    tabla.innerHTML = '';
    let head = document.createElement('thead');
    head.innerHTML = `<th>Identificacion</th>
    <th>Nombre</th>
    <th>Nota 1</th>
    <th>Nota 2</th>
    <th>Nota 3</th>
    <th>Nota def</th>
    <th>Funciones</th>`;
    array.forEach(e => {
        let edit = document.createElement('button');
        edit.textContent = 'Editar';
        let save = document.createElement('button');
        save.textContent = 'Guardar';
        let eliminar1 = document.createElement('button');
        eliminar1.textContent = 'Eliminar'
        edit.addEventListener('click', editar);
        save.addEventListener('click', guardar);

        let tablita = document.createElement('tr');
        let ident = document.createElement('td');
        ident.innerHTML = `<td><input type='text' id='input1' value='${e.id}' disabled></td>`;
        let nombre = document.createElement('td');
        nombre.innerHTML = `<td><input type='text' id='input2' value='${e.nom}' disabled></td>`;
        let nota1 = document.createElement('td');
        nota1.innerHTML = `<td><input type='number' id='input3' value='${e.nota[0]}' disabled></td>`;
        let nota2 = document.createElement('td');
        nota2.innerHTML = `<td><input type='number' id='input4' value='${e.nota[1]}' disabled></td>`;
        let nota3 = document.createElement('td');
        nota3.innerHTML = `<td><input type='number' id='input5' value='${e.nota[2]}' disabled></td>`;
        let definitiva = document.createElement('td');
        definitiva.innerHTML = `<td><input type='number' id='input6' value='${e.def}' disabled></td>`;
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
    });
    tabla.appendChild(head);
}

function eliminar(id) {
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

function guardar() {
    const newId = document.getElementById('input1').value;
    const newNom = document.getElementById('input2').value;
    const newNota1 = document.getElementById('input3').value;
    const newNota2 = document.getElementById('input4').value;
    const newNota3 = document.getElementById('input5').value;

    const updatedItemIndex = array.findIndex(e => e.id === newId);
    if (updatedItemIndex !== -1) {
        array[updatedItemIndex].id = newId;
        array[updatedItemIndex].nom = newNom;
        array[updatedItemIndex].nota[0] = parseFloat(newNota1);
        array[updatedItemIndex].nota[1] = parseFloat(newNota2);
        array[updatedItemIndex].nota[2] = parseFloat(newNota3);
        settext();
    }
}

const getdata = () => {
    return new Promise((resolve, reject) => {
        settext('¿Quieres Calcular?')
        setTimeout(() => {
            resolve(true);
        }, 100)
    })
}

const showdata = (notas, id, nom) => {
    return new Promise((resolve, reject) => {
        settext('Esperando Autorizacion');
        setTimeout(() => {
            let suma = 0;
            notas.forEach(nota => {
                suma += nota;
            });
            suma = suma / notas.length;
            console.log(suma);
            let objeto = {
                ideli: Date.now(),
                id: id,
                nom: nom,
                nota: notas,
                def: suma
            }
            array = [...array, objeto];
            resolve({ jugador: suma });
        }, 100)
    })
}

const boton = (nota1, nota2, nota3, id, nom) => {
    getdata().then(permitido => {
        if (permitido) {
            return showdata([nota1, nota2, nota3], id, nom);
        }
    }).then(user => {
        settext(user.jugador);
    });
}
