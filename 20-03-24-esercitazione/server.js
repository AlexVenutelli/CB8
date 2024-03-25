require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Animal = require("./models/animals");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL)
app.use(express.json());

db.on("error", (err) => console.error(err)); 
db.once("open", () => console.log("server connection established"));

app.get("/animals", async (req, res) => {
    const animals = await Animal.find();
  
    res.json(animals);
  });

  app.get ("/animals/:id", async (req, res) => {
    try{
        const animal =await Animal.findById(req.params.id);

        res.status(201).json(animal);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});

app.post("/animals", async (req, res) => {
    const animal = new Animal({
      genus: req.body.genus,
      species: req.body.species,
      habitat: req.body.habitat,
    });
  
    try {
      const newAnimal = await animal.save();
  
      res.status(201).json({ newAnimal });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
//   app.delete("/animals/:id", async (req, res) => {
//     try {
//       if (req.params.id === "all") {
//         await Animal.deleteMany();
//         res
//           .status(201)
//           .json({ message: "All animals have been deleted" });
//       } else {
//         await Animal.findByIdAndDelete(req.params.id);
//         res.status(201).json({ message: "Animal has been deleted" });
//       }
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

app.delete("/animals/:genus", async (req, res) => {
    try {
        const { genus } = req.params;
      
        if (genus === "all") {
            await Animal.deleteMany();
            res.status(201).json({ message: "All animals have been deleted" });
        } else {
            await Animal.deleteMany({ genus: genus });
            res.status(201).json({ message: `All animals with genus ${genus} have been deleted` });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
  
  app.put("/animals/:id", async (req, res) => {
    try {
      const animal = await Animal.findById(req.params.id);
  
      if (!animal) {
        res.status(404).json({ message: "Animal not found" });
      } else {
        const { genus, species,  habitat } = req.body;
  
        if (genus && species && habitat) {
          animal.genus = genus;
          animal.species = species;
          animal.habitat = habitat;
  
          await animal.save();
          res.status(201).json({ message: "Animal have been modified " });
        }
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  app.listen(3000);