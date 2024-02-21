import { useState, useEffect } from "react";
import { URL_POKEMON_151 } from "@/api/apiPokemon";
import Pokemon from "../pokemon/Pokemon";
import styles from "./index.module.scss";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(URL_POKEMON_151)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className={styles.PokemonList}>
      {pokemonList.map((pokemon) => (
        <Pokemon pokemonData={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
