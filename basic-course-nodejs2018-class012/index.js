// CREACION DE UN SERVIDOR CON EXPRESS.JS
// EXPRESS RESUELVE LAS RUTAS DE FORMA SECUENCIAL, ES DECIR EN EL MISMO SENTIDO EN QUE SE DEFINE

const express = require('express');
const application = express();


application.get("/", (request, response) => {
    response.send("I am in the HOME route");
});

// ESTO ES PARA UNA RUTA GENERAL, SINO APLICA CON NINGUNA OPCION ESTA ES LA OPCION POR DEFAULT PARA PAGINAS INEXISTENTES Y DEBE IR SIEMPRE AL FINAL
application.get("*", (request, response) => {
    response.send("Where am I? I do not know");
});
application.listen(3000, () => {
    console.log('The server Express is listening in the gate 3000');
});