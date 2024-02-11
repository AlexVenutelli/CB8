import Head from "next/head";

import styles from "@/styles/Home.module.scss";

import MainLayout from "./mainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="React Pokedex project by Alex Venutelli"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://preview.redd.it/c0y442te9et81.png?width=337&format=png&auto=webp&s=187dd2517f96c9b6914fc0b1ff790d7bcd40b123"
        />
      </Head>

      <MainLayout>
        <main className={styles.Homepage}>
          <div className={styles.background_image}>
            <img src="/image/home_background.png" alt="background_image" />
          </div>
        </main>
      </MainLayout>
    </>
  );
}
