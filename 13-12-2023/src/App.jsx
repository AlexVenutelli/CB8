import CardList from "./components/cardList/CardList";
import Navbar from "./components/navbar";
import GalleryList from "./components/galleryList";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];
  const galleryList = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?101",
      title: "gallery image",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?211",
      title: "gallery image",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?311",
      title: "gallery image",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?411",
      title: "gallery image",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?511",
      title: "gallery image",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?621",
      title: "gallery image",
    },
    {
      id: 7,
      img: "https://picsum.photos/200/400?131",
      title: "gallery image",
    },
    {
      id: 8,
      img: "https://picsum.photos/200/400?241",
      title: "gallery image",
    },
    {
      id: 9,
      img: "https://picsum.photos/200/400?311",
      title: "gallery image",
    },
    {
      id: 10,
      img: "https://picsum.photos/200/400?421",
      title: "gallery image",
    },
    {
      id: 11,
      img: "https://picsum.photos/200/400?521",
      title: "gallery image",
    },
    {
      id: 12,
      img: "https://picsum.photos/200/400?611",
      title: "gallery image",
    },
    {
      id: 9,
      img: "https://picsum.photos/200/400?312",
      title: "gallery image",
    },
    {
      id: 10,
      img: "https://picsum.photos/200/400?333",
      title: "gallery image",
    },
    {
      id: 11,
      img: "https://picsum.photos/200/400?222",
      title: "gallery image",
    },
    {
      id: 12,
      img: "https://picsum.photos/200/400?111",
      title: "gallery image",
    },
  ];

  return (
    <div className="App">
      <Navbar />

      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />

      <GalleryList galleryImageObj={{ list: galleryList }} />

      <Footer />
    </div>
  );
}

export default App;
