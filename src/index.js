// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

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
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: "//localhost:4000/card/1323456",
  };

  const responseError = {
    success: false,
    // cardURL: null,
    error: ""
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
    } else if(req.body.name !== "") {
      responseError.success;
      responseError.error= "Debes completar el campo Nombre"
    } else if(req.body.job !== "") {
      responseError.error= "Debes completar el campo Puesto"
    } else if(req.body.email !== "") {
      responseError.error= "Debes completar el campo Email"
    } else if(req.body.linkedin !== "") {
      responseError.error= "Debes completar el campo Linkedin"
    } else if(req.body.github !== "") {
      responseError.error= "Debes completar el campo GitHub"
    } else if(req.body.photo !== "") {
      responseError.error= "Debes insertar una foto"
    } 

  // if (
  //   req.body.name !== "" &&
  //   req.body.job !== "" &&
  //   req.body.email !== "" &&
  //   req.body.linkedin !== "" &&
  //   req.body.github !== "" &&
  //   req.body.photo !== ""
  // ) {
  //   res.json(responseSuccess);
  // } else {
  //   res.json(responseError);
  // }
});

server.get("/card/:cardId", (req, res) => {
  res.render("card");
});
const staticServerStyles = "./web/src/styles/";
server.use(express.static(staticServerStyles));

// servidor de estáticos
const staticServerPath = "./src/public-react"; // ruta de la carpeta donde vamos a guardar todos los ficheros estáticos
server.use(express.static(staticServerPath)); // le decimos al servidor que use el servidor estático de express

// crear SIEMPRE AL FINAL: endpoint para gestionar las rutas de ficheros que no existen
