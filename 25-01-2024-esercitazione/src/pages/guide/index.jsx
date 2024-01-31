import styles from "../../styles/Guide.module.scss";
import Image from "next/image";

export default function Guide() {
  return (
    <div className={styles.Guide}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src="https://www.pngkey.com/png/full/18-187758_pokeball-open-png-portable-network-graphics.png"
          width="1000"
          height="600"
        />
      </div>

      <h1>Guide to Pokemon Search:</h1>
      <ol>
        <li>
          <h3>Locate the Search Bar:</h3>
          <p>
            On the main Pokedex screen, find the search bar located at the top
            of the screen.
          </p>
        </li>
        <li>
          <h3>Enter the Pokemon Name::</h3>
          <p>
            Tap the search bar and enter the name of the Pokemon you want to
            find. For example, if you're looking for "Pikachu," type the name
            into the bar.
          </p>
        </li>
        <li>
          <h3>Instant Results:</h3>
          <p>
            As you type, our app will provide instant results matching the
            entered name. These results include the searched Pokemon and any
            associated evolutions.
          </p>
        </li>
        <li>
          <h3>Tap for Details:</h3>
          <p>
            Once results are displayed, tap on the desired Pokemon to access
            further details, including basic information, evolutions, and more.
          </p>
        </li>
        <li>
          <h3>Navigate Through Results:</h3>
          <p>
            If there are multiple results with similar names, scroll through
            them to find the specific Pokemon you're looking for.
          </p>
        </li>
      </ol>
      <p>
        With this search feature, exploring the vast world of Pokemon is easier
        than ever. Whether you're searching for your favorite Pokemon or
        exploring new creatures, our Pokedex app is here to satisfy your
        curiosity! Happy exploring! 🌟
      </p>
    </div>
  );
}
