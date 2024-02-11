// import MainLayout from "./mainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <MainLayout> */}
      <Component {...pageProps} />
      {/* </MainLayout> */}
    </>
  );
}
