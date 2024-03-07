const express = require("express");
const router = express.Router();

const clothesController = require("../../controllers/clothesController");

router.route("/").get(clothesController.getAllClothes);
router.route("/uomo").get(clothesController.getManClothes);
router.route("/donna").get(clothesController.getWomanClothes);
router.route("/bambino").get(clothesController.getChildClothes);

module.exports = router;
