const express = require('express')
const app = express();

app.use(express.json());

const fruits = [
  "Strawberry",
  "Pinneapple",
  "Coconout",
  "Cherry",
  "Banana",
  "Kiwi",
  "Orange",
  "Pear",
  "Apple",
  "Blackberry",
  "Blueberry",
];

//Peticiones

app.get("/api/fruits", async (req, res) => {
  return res.status(200).send({
    fruits,
  });
});

//Ejecución Backend

app.listen(8888, () => console.log("Servidor activo en el puerto 8888"));
