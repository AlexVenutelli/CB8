// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("index");
// });

// router.get("/about", (req, res) => {
//   res.render("about");
// });

// router.get("/uomo", (req, res) => {
//   res.render("uomo");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { data } = require("../controllers/clothesController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/uomo", (req, res) => {
  res.render("uomo", { products: data.clothes.uomo });
});

router.get("/donna", (req, res) => {
  res.render("donna", { products: data.clothes.donna });
});

router.get("/bambino", (req, res) => {
  res.render("bambino", { products: data.clothes.bambino });
});

module.exports = router;
