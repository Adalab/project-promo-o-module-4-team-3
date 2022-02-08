// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
	express.json({
		limit: "5mb",
	})
);
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

//DATABASE
const db = new Database("./src/db/DataBaseCards.db", { verbose: console.log });

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
	const responseSuccess = {
		success: true,
		cardURL: `//localhost:4000/card/12345`,
	};
	//Ahora estamo metiendo a pincho un ID 12345; ese id nos tienes que venir de la base de datos, pero todavía no estamos escribiendo en ella.
	//Meter toda la info del formulario en la base de datos ccon INSERT INTO, cogiendo todos los parametros que nos llegan por body - req.body.name, req.body.job....etc
	const responseError = {
		success: false,
		cardURL: null,
	};

	if (
		req.body.name !== "" &&
		req.body.job !== "" &&
		req.body.email !== "" &&
		req.body.linkedin !== "" &&
		req.body.github !== "" &&
		req.body.photo !== ""
	) {
		res.json(responseSuccess);
	} else {
		res.json(responseError);
	}
});

server.get("/card/:cardId", (req, res) => {
	console.log(req.params.id);

	// preparamos la query
	const query = db.prepare(`SELECT * FROM cards WHERE id = ? `);
	// ejecutamos la query
	const card = query.get(12345);
	res.render("card", card);
	//Necesitamos saber la ID que se generó en la tarjeta, que pasamos aquí como URL Param en :UrlID
});

// servidor de estáticos

//Servidor de CSS
const staticServerStyles = "./src/styles";
server.use(express.static(staticServerStyles));
const staticServerPath = "./src/public-react"; // ruta de la carpeta donde vamos a guardar todos los ficheros estáticos
server.use(express.static(staticServerPath)); // le decimos al servidor que use el servidor estático de express

// crear SIEMPRE AL FINAL: endpoint para gestionar las rutas de ficheros que no existen
