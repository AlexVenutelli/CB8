<<<<<<< HEAD
import Link from "next/link";
import styles from "./index.module.scss";
import PokemonSearchBar from "@/component/pokemonSearchBar/PokemonSearchBar";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const updateLoadingState = (newLoadingState) => {
    setLoading(newLoadingState);
  };

  return (
    <div className={styles.MainLayout}>
      <nav className={styles.navBar}>
        <div className={styles.navBar_Menu}>
          <div className={styles.logo}>
            <img
              src="/image/pokeball_white.png"
              alt="pokeball_logo"
              className={styles.pokeball_logo}
            />
            <h1>POKÉDEX</h1>
          </div>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pokemon">Pokedex</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navBar_SearchBar}>
          <PokemonSearchBar updateLoadingState={updateLoadingState} />
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <p>
          Pokedex - React Project by Alex Venutelli - For the Edgemony BootCamp
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
=======
import Link from "next/link";
import styles from "./index.module.scss";
import PokemonSearchBar from "@/component/pokemonSearchBar/PokemonSearchBar";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const updateLoadingState = (newLoadingState) => {
    setLoading(newLoadingState);
  };

  return (
    <div className={styles.MainLayout}>
      <nav className={styles.navBar}>
        <div className={styles.navBar_Menu}>
          <div className={styles.logo}>
            <img
              src="/image/pokeball_white.png"
              alt="pokeball_logo"
              className={styles.pokeball_logo}
            />
            <h1>POKÉDEX</h1>
          </div>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pokemon">Pokedex</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navBar_SearchBar}>
          <PokemonSearchBar updateLoadingState={updateLoadingState} />
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <p>
          Pokedex - React Project by Alex Venutelli - For the Edgemony BootCamp
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
>>>>>>> 4720cc8bc51b74c79469942bfa8fd0c83d0eb2a6
