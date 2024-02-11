<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PokemonTypes from "../pokemonTypes/PokemonTypes";
import styles from "./index.module.scss";

const Pokemon = ({ pokemonData }) => {
  const pokemonColor = (type) => {
    switch (type) {
      case "normal":
        return "#a6a6a6";
      case "fighting":
        return "#e09b80";
      case "flying":
        return "#afb6ff";
      case "poison":
        return "#b972b9";
      case "ground":
        return "#e3cf8e";
      case "rock":
        return "#b8a273";
      case "bug":
        return "#b5c388";
      case "ghost":
        return "#8a8ab8";
      case "steel":
        return "#b5b5c8";
      case "fire":
        return "#f7b396";
      case "water":
        return "#94a9d9";
      case "grass":
        return "#6eaa6e";
      case "electric":
        return "#fbd978";
      case "psychic":
        return "#fba3b4";
      case "ice":
        return "#b0e1e1";
      case "dragon":
        return "#b084da";
      case "dark":
        return "#b0a797";
      case "fairy":
        return "#f2b8da";
      default:
        return "#7f7f7f";
    }
  };

  const styleSetting = {
    classDiv: styles.typesContainer,
    classParagraph: styles.typeContainer,
    classImage: styles.typeImg,
  };

  const router = useRouter();

  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const onHandleClick = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  useEffect(() => {
    fetch(pokemonData.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setPokemon(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [pokemonData.url]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={styles.Pokemon}
      style={{
        backgroundColor:
          pokemon.types && pokemon.types[0] && pokemon.types[0].type
            ? `${pokemonColor(pokemon.types[0].type.name)}`
            : "#7f7f7f",
      }}
      onClick={onHandleClick}
    >
      <div className={styles.Pokemon_text}>
        <p>{pokemon.id}</p>
        <h1 className={styles.text}>{pokemon.name}</h1>
        {!loading && (
          <PokemonTypes pokemonData={pokemon} classSetting={styleSetting} />
        )}
      </div>
      <div className={styles.sprites}>
        <img
          className={styles.sprite}
          src={
            pokemon.sprites && pokemon.sprites.other
              ? pokemon.sprites.other.showdown.front_default
              : null
          }
          alt="Pokemon"
        />
      </div>
    </div>
  );
};

export default Pokemon;
=======
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PokemonTypes from "../pokemonTypes/PokemonTypes";
import styles from "./index.module.scss";

const Pokemon = ({ pokemonData }) => {
  const pokemonColor = (type) => {
    switch (type) {
      case "normal":
        return "#a6a6a6";
      case "fighting":
        return "#e09b80";
      case "flying":
        return "#afb6ff";
      case "poison":
        return "#b972b9";
      case "ground":
        return "#e3cf8e";
      case "rock":
        return "#b8a273";
      case "bug":
        return "#b5c388";
      case "ghost":
        return "#8a8ab8";
      case "steel":
        return "#b5b5c8";
      case "fire":
        return "#f7b396";
      case "water":
        return "#94a9d9";
      case "grass":
        return "#6eaa6e";
      case "electric":
        return "#fbd978";
      case "psychic":
        return "#fba3b4";
      case "ice":
        return "#b0e1e1";
      case "dragon":
        return "#b084da";
      case "dark":
        return "#b0a797";
      case "fairy":
        return "#f2b8da";
      default:
        return "#7f7f7f";
    }
  };

  const styleSetting = {
    classDiv: styles.typesContainer,
    classParagraph: styles.typeContainer,
    classImage: styles.typeImg,
  };

  const router = useRouter();

  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const onHandleClick = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  useEffect(() => {
    fetch(pokemonData.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setPokemon(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [pokemonData.url]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={styles.Pokemon}
      style={{
        backgroundColor:
          pokemon.types && pokemon.types[0] && pokemon.types[0].type
            ? `${pokemonColor(pokemon.types[0].type.name)}`
            : "#7f7f7f",
      }}
      onClick={onHandleClick}
    >
      <div className={styles.Pokemon_text}>
        <p>{pokemon.id}</p>
        <h1 className={styles.text}>{pokemon.name}</h1>
        {!loading && (
          <PokemonTypes pokemonData={pokemon} classSetting={styleSetting} />
        )}
      </div>
      <div className={styles.sprites}>
        <img
          className={styles.sprite}
          src={
            pokemon.sprites && pokemon.sprites.other
              ? pokemon.sprites.other.showdown.front_default
              : null
          }
          alt="Pokemon"
        />
      </div>
    </div>
  );
};

export default Pokemon;
>>>>>>> 4720cc8bc51b74c79469942bfa8fd0c83d0eb2a6
