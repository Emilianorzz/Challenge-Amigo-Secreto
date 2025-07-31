// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let listaNombres = [];


// implementar funcion para agregar amigos
function AgregarAmigo() {
    // toma el valor ingresado
    const input = document.getElementById('amigo');
    const nombre = input.value;

    //valida que no este vacio
    if (nombre == ''){
        alert('Ingrese un nombre valido');
        return;
    }

    // Agregar a la lista
    listaNombres.push(nombre);

    // limpiar el campo de entrada
    input.value = '';

    ActualizarLista();
}

function ActualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let nombre of listaNombres){
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    }
}


function SortearAmigo() {
    if (listaNombres.length > 0 ){
        let numeroGenerado = Math.floor(Math.random() * listaNombres.length);
        let nombreSorteado = listaNombres[numeroGenerado];
        let elementoResultado = document.getElementById('resultado');
        elementoResultado.innerHTML = nombreSorteado;
    } else {
        alert('Lista vacia');
    }
}