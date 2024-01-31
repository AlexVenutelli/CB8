import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <nav>
        <img
          src="https://pokedex.gabrielrapucci.com.br/_next/image?url=%2Fimages%2Fpokedex.png&w=384&q=75"
          alt="pokedex_logo"
        />

        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link href="/guide">Guide</Link>
          </li>
        </ul>
      </nav>

      {children}

      <footer>
        <p>
          Explore the world of Pokemon with our comprehensive Pokedex. © 2024
          PokedexMaster - All rights reserved. Pokemon and all related
          trademarks are owned by Nintendo, Game Freak, and Creatures.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
