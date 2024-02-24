const express = require("express");
const bodyParser = require("body-parser");
const authorize = require("./auth");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/mostra-dati", (req, res) => {
  const { nome } = req.body;
  const { cognome } = req.body;
  const { email } = req.body;

  if (nome && cognome && email) {
    return res.status(200).send(`benvenuto ${nome} ${cognome}`);
  }
  res.status(400).send("inserisci i dati richiesti");
});

app.get("/dashboard", [authorize], (req, res) => {
  res.send("dashboard");
});

app.listen(port, () => {
  console.log("server attivo");
});
