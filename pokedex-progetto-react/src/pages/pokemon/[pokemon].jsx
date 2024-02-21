import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { URL_POKEMON } from "@/api/apiPokemon";
import LoadingSpinner from "@/component/loadingSpinner/LoadingSpinner";
import PokemonTypes from "@/component/pokemonTypes/PokemonTypes";
import MainLayout from "../mainLayout";

import styles from "./index.module.scss";

export default function Pokedex() {
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

  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  const pokemonUrl = `${URL_POKEMON}${router.query.pokemon}/`;

  const decimalHeight = pokemonData.height / 10;
  const decimalWeight = pokemonData.weight / 10;

  const pokemonId = String(pokemonData.id).padStart(3, "0");

  useEffect(() => {
    if (router.query.pokemon) {
      setLoading(true);
      fetch(pokemonUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }
          return res.json();
        })
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error))
        .finally(() => {
          console.log("pokemon ", pokemonData);
          setLoading(false);
        });
    }
  }, [router.query.pokemon]);
  console.log("loading ", loading);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <LoadingSpinner className={styles.loadingSpinner} />
      ) : pokemonData.id ? (
        <div
          className={styles.pokemonCard}
          style={{
            backgroundColor: `${pokemonColor(pokemonData.types[0].type.name)}`,
          }}
        >
          <div className={styles.wrapperID}>
            <Link className={styles.Link} href="/pokemon">
              <FaArrowLeft className={styles.arrowIcon} />
            </Link>
            <p className={styles.pokemonId}># {pokemonId}</p>
          </div>

          <div className={styles.pokemonName}>
            <h1>{pokemonData.name.toUpperCase()}</h1>
            <label className={styles.biometry}>
              <p>Height: {decimalHeight} m</p>
              <p>Weight: {decimalWeight} kg</p>
            </label>
          </div>

          <PokemonTypes pokemonData={pokemonData} classSetting={styleSetting} />

          <ul className={styles.stats}>
            {pokemonData.stats.map((stat, i) => (
              <li key={i} className={styles.stat}>
                <p className={styles.statName}>
                  {stat.stat.name.toUpperCase()}
                </p>
                <label className={styles.progress_stat}>
                  <p>{stat.base_stat}</p>
                  <progress
                    value={stat.base_stat}
                    max="110"
                    className={styles.progressBar}
                  />
                </label>
              </li>
            ))}
          </ul>

          <img
            className={styles.image}
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt="Pokemon"
          />
        </div>
      ) : (
        <MainLayout>
          <div className={styles.notFound}>
            <h1>{router.query.pokemon + " not found"}</h1>
            <Link className={styles.Link} href="/pokemon">
              <button className={styles.button}>Pokemon List</button>
            </Link>
          </div>
        </MainLayout>
      )}
    </div>
  );
}
