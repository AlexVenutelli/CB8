import CardList from "./components/cardList/CardList";
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

  // const imageGalleryList = [
  //   {
  //     id: 1,
  //     img: "https://picsum.photos/300/300?11",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 2,
  //     img: "https://picsum.photos/300/300?12",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 3,
  //     img: "https://picsum.photos/300/300?13",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 4,
  //     img: "https://picsum.photos/300/300?14",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 5,
  //     img: "https://picsum.photos/300/300?15",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 6,
  //     img: "https://picsum.photos/300/300?16",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 7,
  //     img: "https://picsum.photos/300/300?17",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 8,
  //     img: "https://picsum.photos/300/300?18",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 9,
  //     img: "https://picsum.photos/300/300?19",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 10,
  //     img: "https://picsum.photos/300/300?20",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 11,
  //     img: "https://picsum.photos/300/300?21",
  //     title: "image gallery",
  //   },
  //   {
  //     id: 12,
  //     img: "https://picsum.photos/300/300?22",
  //     title: "image gallery",
  //   },
  // ];

  return (
    <div className="App">
      {/* <button>Ciao</button> */}
      {/* <Button textContent="cliccami!" color="white" />
      <Button textContent="Accetta!" />
      <Button textContent="Annulla!" /> */}
      <nav className="nav-bar">
        <img
          className="logo"
          alt="logo netflix"
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
        />
        <div className="search-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
          ></input>
          <img
            className="search-button"
            alt="search button"
            src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
          />
        </div>
      </nav>

      <div className="movies-list">
        <CardList
          cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
        />
        <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
        {/* <CardList cardListObj={{ title: "Sci-Fi" }} />
      <CardList cardListObj={{ title: "Adventure" }} /> */}
      </div>

      <div className="gallery">
        <div className="title-gallery">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-container">
          <img src="https://picsum.photos/150/150?11" />
          <img src="https://picsum.photos/150/150?12" />
          <img src="https://picsum.photos/150/150?13" />
          <img src="https://picsum.photos/150/150?14" />
          <img src="https://picsum.photos/150/150?15" />
          <img src="https://picsum.photos/150/150?16" />
          <img src="https://picsum.photos/150/150?17" />
          <img src="https://picsum.photos/150/150?18" />
          <img src="https://picsum.photos/150/150?19" />
          <img src="https://picsum.photos/150/150?20" />
          <img src="https://picsum.photos/150/150?21" />
          <img src="https://picsum.photos/150/150?22" />
        </div>
      </div>

      <footer className="footer">
        <ul className="mobile-footer">
          <li>
            <img
              src="https://img.icons8.com/ios/50/cottage--v1.png"
              alt="Home"
            />
            <p>Home</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
              alt="Shop"
            />
            <p>Home</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios/50/film-reel--v1.png"
              alt="Coming Soon"
            />
            <p>Coming Soon</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios/50/smiling.png"
              alt="Fast Laughs"
            />
            <p>Faust Laught</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios/50/download--v1.png"
              alt="Downloads"
            />
            <p>Download</p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
