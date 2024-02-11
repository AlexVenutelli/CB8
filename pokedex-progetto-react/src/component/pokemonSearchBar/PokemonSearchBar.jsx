<<<<<<< HEAD
import React, { useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const PokemonSearchBar = () => {
  const router = useRouter();
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push("/pokemon/" + pokemonSearch.toLowerCase());
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.form}>
      <input
        className={styles.inputPokedex}
        value={pokemonSearch}
        onChange={onHandleChange}
        placeholder="What Pokémon are you looking for?"
        type="text"
        required
      />
    </form>
  );
};

export default PokemonSearchBar;
=======
import React, { useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const PokemonSearchBar = () => {
  const router = useRouter();
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push("/pokemon/" + pokemonSearch.toLowerCase());
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.form}>
      <input
        className={styles.inputPokedex}
        value={pokemonSearch}
        onChange={onHandleChange}
        placeholder="What Pokémon are you looking for?"
        type="text"
        required
      />
    </form>
  );
};

export default PokemonSearchBar;
>>>>>>> 4720cc8bc51b74c79469942bfa8fd0c83d0eb2a6
