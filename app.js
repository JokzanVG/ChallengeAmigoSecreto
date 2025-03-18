// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Almacena la lista de amigos
let listaNombreAmigos = [];
//Almacena el nombre del amigo
let amigo = "";

//Función para agregar un amigo a la lista
function agregarAmigo() {
    amigo = document.getElementById("amigo").value;
    limpiar();
    if(amigo === ""){
        alert("Por favor. Ingrese un nombre valido.");
    }else{
        listaNombreAmigos.push(amigo);
        mostrarLista(amigo);
    }
    return;
}
//Función para mostrar la lista de amigos
function mostrarLista(nombre) {
    let lista = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < listaNombreAmigos.length; i++) {
        lista.innerHTML += "<li>" + listaNombreAmigos[i] + "</li>";
    }
    return;
}
//Función para sortear un amigo
function sortearAmigo() {
    if(listaNombreAmigos.length > 0){
    let amigoSorteado = listaNombreAmigos[Math.floor(Math.random() * listaNombreAmigos.length)];
    reiniciarCampos();
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
    }else{
        alert("Por favor. Ingrese al menos un amigo.");
    }
    return;
}
//Función para reiniciar los campos
function reiniciarCampos() {
    document.querySelector('#amigo').value = "";
    document.querySelector('#listaAmigos').innerHTML = "";
    listaNombreAmigos = [];
    return;
}
//Función para limpiar el resultado
function limpiar() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("amigo").value = "";
    return;
}
