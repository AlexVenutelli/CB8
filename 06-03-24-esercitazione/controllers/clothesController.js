// const data = {
//   clothes: require("../models/clothes.json"),
//   setsClothes: (data) => {
//     data.clothes = data;
//   },
// };

// const fs = require("fs").promises;
// const path = require("path");

// const getAllClothes = (req, res) => {
//   res.json(data.clothes);
// };
// const getManClothes = (req, res) => {
//   res.json(data.clothes.uomo);
// };
// const getWomanClothes = (req, res) => {
//   res.json(data.clothes.donna);
// };
// const getChildClothes = (req, res) => {
//   res.json(data.clothes.bambino);
// };

// module.exports = {
//   getAllClothes,
//   getManClothes,
//   getChildClothes,
//   getWomanClothes,
// };

const data = {
  clothes: require("../models/clothes.json"),
  setsClothes: (data) => {
    data.clothes = data;
  },
};

const getAllClothes = (req, res) => {
  res.json(data.clothes);
};

const getManClothes = (req, res) => {
  res.json(data.clothes.uomo);
};

const getWomanClothes = (req, res) => {
  res.json(data.clothes.donna);
};

const getChildClothes = (req, res) => {
  res.json(data.clothes.bambino);
};

module.exports = {
  data,
  getAllClothes,
  getManClothes,
  getChildClothes,
  getWomanClothes,
};
