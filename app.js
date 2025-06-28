// 1- Crear un array de usuarios

const usuariosActuales = document.querySelector("usuarios");
const nuevoUsuario = document.querySelector("nuevoUsuario");
const agregar = document.querySelector("agregarUsuario");


const usuarios = [
 { id: 1, nombre: "Pedro", edad: 20, email: "pedro@mail.com" },
  { id: 2, nombre: "Carla", edad: 45, email: "carla@mail.com" },
  { id: 3, nombre: "Florencia", edad: 60, email: "florencia@mail.com" },
  { id: 4, nombre: "Ramiro", edad: 35, email: "ramiro@mail.com" }
];

//2- Mostrar los usuarios en pantalla (Usar innerHTML o createElement())

for (const key in usuarios) {
  let elemento = document.querySelector(".Usuarios");
  elemento.innerHTML += `<ul>${usuarios[key]}</ul>`;

}

  

  











//3-Agregar nuevos usuarios desde un formulario







// 4-Guardar información en Storage






localStorage.setItem("ciudad", "nuevoDato");

let nombre = localStorage.getItem("ciudad");

console.log(localStorage.getItem('ciudad'));