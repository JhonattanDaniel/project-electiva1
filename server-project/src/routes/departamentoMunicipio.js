const axios = require("axios");
const departamentoMunicipio = require("../models/departamentoMunicipio");
const express = require("express");
const app = express.Router();


app.get("/datosabiertos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;
    /* Gestionar la información en la base de datos */
    await departamentoMunicipio.deleteMany();
    await departamentoMunicipio.insertMany(data);
    res.status(201).send("Datos almacenados en la mongoDB");
  } catch {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
});


app.get("/listarDatos", async (req, res) => {
  try {
    const data = await departamentoMunicipio.aggregate([
      { $group: { _id: "$departamento", municipios: { $addToSet: "$municipio" } } }
    ]);

    if (data.length === 0) {
      res.status(404).send("No se encontraron datos.");
    } else {
      res.send(data);
    }
  } catch (error) {
    console.log("Error accediendo a la base de datos:", error);
    res.status(500).send("Error al acceder a la base de datos");
  }
});


module.exports = app;


app.get("/probar", (req, res) => {
  departamentoMunicipio
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

