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
  if (
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "" &&
    req.body.photo !== ""
  ) {
    const dataForCard = {
      name: req.body.name,
      job: req.body.job,
      email: req.body.email,
      linkedin: req.body.linkedin,
      github: req.body.github,
      photo: req.body.photo,
      phone: req.body.phone,
      palette: req.body.palette,
    };
    const newUserCard = db.prepare(
      "INSERT INTO cards (name, job, email, linkedin, github, photo, phone, palette) VALUES (?, ?, ?, ? ,?, ? ,? ,?)"
    );
    const newUserCardinDB = newUserCard.run(
      dataForCard.name,
      dataForCard.job,
      dataForCard.email,
      dataForCard.linkedin,
      dataForCard.github,
      dataForCard.photo,
      dataForCard.phone,
      dataForCard.palette
    );
    console.log(newUserCardinDB);
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newUserCardinDB.lastInsertRowid}`,
      id: newUserCardinDB.lastInsertRowid,
    };
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      cardURL: "Debes completar algun campo",
    };

    const fieldsWithError = [];

    if (!req.body.name) {
      fieldsWithError.push("nombre");
    }
    if (!req.body.job) {
      fieldsWithError.push("puesto");
    }
    if (!req.body.email) {
      fieldsWithError.push("email");
    }
    if (!req.body.linkedin) {
      fieldsWithError.push("linkedin");
    }
    if (!req.body.github) {
      fieldsWithError.push("github");
    }
    if (!req.body.photo) {
      fieldsWithError.push("foto");
    }

    const textAllFields = fieldsWithError.join(", ");
    responseError.cardURL = `debes completar los siguientes campos: ${textAllFields}`;

    res.json(responseError);
  }
});

server.get("/card/:cardId", (req, res) => {
  console.log(req.params.cardId);
  console.log("hola", req.params);
  // preparamos la query
  const query = db.prepare(`SELECT * FROM cards WHERE id = ? `);
  // ejecutamos la query
  const card = query.get(req.params.cardId);
  console.log(card);
  res.render("card", card);
  //Necesitamos saber la ID que se generó en la tarjeta, que pasamos aquí como URL Param en :UrlID
});

// SERVIDORES DE ESTÁTICOS
//Servidor de CSS
const staticServerStyles = "./src/styles";
server.use(express.static(staticServerStyles));
// ruta de la carpeta donde vamos a guardar todos los ficheros estáticos
const staticServerPath = "./src/public-react";
// le decimos al servidor que use el servidor estático de express
server.use(express.static(staticServerPath));

// crear SIEMPRE AL FINAL: endpoint para gestionar las rutas de ficheros que no existen
