var mochila = {
    "color": "Azul",
    "tamaño": "Mediano",
    "contenido": ["Botella de agua", "Cuadro"]
};
mochila.color = "Verde";
console.log(mochila.color);
console.log(mochila.contenido)
mochila.contenido.push("Lápiz");
console.log(mochila.contenido);

// Agregar propiedades
var curso = {
    "titulo": "Aprende Java Script desde cero",
    "idioma": "Español",
    "duracion": 30
};
curso.vistas = 2;
console.log(curso);

// Borrar una propiedad de un objeto
var curso = {
    "titulo": "Aprende Java Script desde cero",
    "idioma": "Español",
    "duracion": 30
};
delete curso.duracion;
console.log(curso);