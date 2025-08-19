// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres.
let amigos =[];
///funcion para agregar nombre al array
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() ===""){
        alert("Por favor ingrese un nombre por favor");
        return;
    }
    amigos.push(nombreAmigo);

    actualizarAmigos(amigos);
    document.getElementById("amigo").value="";
}
//funcion para la actualizar lista de amigos
function actualizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
// Funcion para realizar el sorteo y ocultar el amigo elegido
function sortearAmigo(){
    if (amigos.length ==0){
        alert("No hay más amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    amigos.splice(indiceAleatorio,1);

    actualizarAmigos();
}
// funcion para borrar la lista
function limpiar(){
    amigos=[];
    document.getElementById("listaAmigos").innerHTML="";
}
// Codigo aplicado para ejecutar el boton de reinicio de juego
function reinicioJuego(){
    limpiar();
    document.getElementById("resultado").innerHTML="";
}