// require("dotenv").config();
// const express = require("express");
// const hbs = require("hbs");
// const clothes = require("./models/clothes");

// const PORT = process.env.PORT;

// const app = express();
// app.set("view engine", "hbs");
// app.use(express.json());
// app.use(express.static(__dirname + "/public"));

// //ROUTING
// app.use("/", require("./routes/root"));
// app.use("/ecommerce", require("./routes/api/ecommerce"));

// app.all("*", (req, res) => {
//   res.status(400).render("404");
// });

// app.listen(PORT, () => {
//   console.log(`Server attivo sulla porta ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const clothes = require("./models/clothes");

const PORT = process.env.PORT;

const app = express();
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// ROUTING
app.use("/", require("./routes/root"));
app.use("/ecommerce", require("./routes/api/ecommerce"));

app.all("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
