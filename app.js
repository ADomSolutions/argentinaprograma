/*PARA CUANDO HACE CLICK EN EL MENU HAMBURGUESA*/
_toggle.onclick = () => {
  _items.classList.toggle("open");
  _toggle.classList.toggle("close");
};

//Trabajo con la API para sacar los datos y poner en grilla

const API_URL = "https://rickandmortyapi.com/api/character/";

//hago la funcion obtener personajes
function obtenerPersonajes() {
  //La función fetch() devuelve una promesa que se resuelve en la respuesta de la solicitud.
  //Luego, el código utiliza el método .json() en la respuesta para convertir los datos en formato JSON
  // en un objeto de JavaScript.
  fetch(API_URL)
    .then((response) => {
      // Convertir la respuesta en formato JSON
      return response.json();
    })
    .then((data) => {
      const personajes = data.results;
      const contenedorPersonajes = document.getElementById("personajesvarios");
      //recorrO los personajes obtenidos en el objeto JavaScript y creo un elemento div para cada uno de ellos.
      //Para crear cada div, el código utiliza la desestructuración de objetos para extraer
      //las propiedades del objeto de personaje
      for (const personaje of personajes) {
        const {
          image,
          name,
          gender,
          species,
          status,
          location: { name: locationName },
          origin: { name: originName },
        } = personaje;

        const div = document.createElement("div");
        div.classList.add("personaje");
        //Se agrega HTML al div utilizando la propiedad innerHTML.
        div.innerHTML = `
          <img src="${image}">
          <h2>${name}</h2>
          <h4>${gender}</h4>
          <h4>${species}</h4>
          <h4>${status}</h4>
          <h4>${locationName}</h4>
          <h4>${originName}</h4>
        `;
        //El código agrega el div a la página web en el contenedor con id "personajesvarios".
        contenedorPersonajes.appendChild(div);
      }
    })
    .catch((error) => {
      console.error("Error al obtener los personajes:", error); //Si la solicitud falla,
      //se muestra un mensaje de error en la consola del navegador utilizando el método console.error().
    });
}

obtenerPersonajes();
