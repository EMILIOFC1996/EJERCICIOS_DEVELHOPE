// Escriba un servidor Express simple que escuche en el puerto 3000(use dotenv para especificar el puerto)
// Cree una "base de datos" ficticia planetsutilizando una letvariable. (Usarás estos datos en ejercicios posteriores).
// Configure su aplicación ( app.use()) para:
// aceptar JSON del Cliente
// registrar las solicitudes del Cliente
// Usar
// Base de datos ficticia con datos iniciales:
import "dotenv/config";
import express from "express";
import morgan from "morgan";
const port = process.env.PORT;
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];
const server = express();

server.use(
  express.json() //respuesta formateada del cliente.
);
server.use(
  morgan("dev") //respuesta formateada del cliente.
);

// server.get("/", (req, res) => res.status(200).send({
//     msg: "hola server"
// })
// )

// Escriba un enrutador con las siguientes rutas:
// GET /api/planets: devuelve todos los planetas (JSON) con200
// GET /api/planets/:id: devuelve un planeta (JSON) por id con200
// POST /api/planets: crea un planeta, devuelve solo 201código y un JSON exitoso con clavemsg
// Asegúrate de que cada planeta esté creado con idy name.
// PUT /api/planets/:id: actualiza un planeta por identificación, devuelve solo 200código y un JSON exitoso con clavemsg
// DELETE /api/planets/:id: elimina un planeta por identificación, devuelve solo 200código y un JSON exitoso con clavemsg
// Valide los campos de planetas cuando corresponda.
// Usar
// La base de datos ficticia de planetas del ejercicio anterior.
// joibiblioteca para su validación.
// Controlar
// Utilice Postman para probar las rutas.
// Rutas POSTy PUTdeben recibir datos en formato JSON ( req.body).

server.get("/api/planets", (req, res) => res.status(200).send(planets));
server.get("/api/planets/:id", (req, res) => {
    const {id}= req.params;
    const planeta= planets.find((e)=> e.id== Number(id))
    if(planeta){

        res.status(200).send(
            planeta
        );
    } else res.status(404).send({msg:"NO se ha encontrado nada"})
});

server.listen(port, () => console.log("SE HA ABIERTO PUERTO"));
