// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
	const responseSuccess = {
		sucess: true,
		cardURL: "{`http://localhost:4000/card/1323456`}",
	};

	const responseError = {
		sucess: false,
		error: "Error description",
	};

	res.json(responseSuccess);
});

// servidor de estáticos
// const staticServerPath = "./public";  // ruta de la carpeta donde vamos a guardar todos los ficheros estáticos

// server.use(express.static(staticServerPath)); // le decimos al servidor que use el servidor estático de express

server.get("/card/:cardId", (req, res) => {
	const htmlCode = `
        <!DOCTYPE html><html lang="es">
          <body>
            <h1>Hola</h1>
          </body>
        </html>`;
	res.send(htmlCode);
});

// crear SIEMPRE AL FINAL: endpoint para gestionar las rutas de ficheros que no existen
