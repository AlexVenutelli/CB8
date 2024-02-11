import React from "react";
import MainLayout from "../mainLayout";
import PokemonList from "@/component/pokemonList/PokemonList";
import styles from "./index.module.scss";

export default function Pokedex() {
  return (
    <MainLayout>
      <div className={styles.pokedex_home}>
        <PokemonList />
      </div>
    </MainLayout>
  );
}
