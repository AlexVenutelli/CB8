const express = require ("express");

const app = express ();
const PORT = 3000;

let pokemon = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      },
      {
        "id": 2,
        "name": "Ivysaur",
        "type": ["Grass", "Poison"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
      },
      {
        "id": 3,
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
      },
      {
        "id": 4,
        "name": "Charmander",
        "type": ["Fire"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
      },
      {
        "id": 5,
        "name": "Charmeleon",
        "type": ["Fire"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
      },
      {
        "id": 6,
        "name": "Charizard",
        "type": ["Fire", "Flying"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
      },
      {
        "id": 7,
        "name": "Squirtle",
        "type": ["Water"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
      },
      {
        "id": 8,
        "name": "Wartortle",
        "type": ["Water"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
      },
      {
        "id": 9,
        "name": "Blastoise",
        "type": ["Water"],
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
      }
    ];


app.use (express.json());

app.get("/pokemon", (req,res,next) => {
res.json(pokemon);
});


app.post("/pokemon", (req, res, next) => {

  const body = req.body

  const existingPokemonById = pokemon.find(pokemon => pokemon.id === body.id);
  const existingPokemonByName = pokemon.find(pokemon => pokemon.name.toLowerCase() === body.name.toLowerCase());

  if (body.id && body.name && body.type && body.image && (!existingPokemonById && !existingPokemonByName)) {
      pokemon.push(body);
      res.status(201).send("Pokémon added successfully");
  } else if (existingPokemonById || existingPokemonByName) {
      res.status(400).send("Pokémon already exists");
  } else {
      res.status(400).send("Invalid Pokémon data");
  }
});


app.delete("/pokemon/:id", (req,res,next) => {

  const id = Number(req.params.id);

  pokemon = pokemon.filter((pokemon) => pokemon.id !== id);
  res.send ("Pokémon has been removed")
});



app.put("/pokemon/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;

 
  const index = pokemon.findIndex(pokemon => pokemon.id === id);

  
  if (index === -1) {
    res.status(404).send("Pokémon not found");
  } else {
    pokemon[idex] = body;
    res.send("Pokémon updated successfully")
  }
});

//
app.listen(PORT);