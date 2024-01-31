import "./index.css";

const links = [
  {
    id: 1,
    url: "home",
  },
  {
    id: 2,
    url: "contacts",
  },
  {
    id: 3,
    url: "about",
  },
  {
    id: 4,
    url: "info",
  },
];

const Navbar = () => {
  return (
    <header className="Navbar">
      <img
        className="logo"
        src="https://static.vecteezy.com/system/resources/previews/022/101/069/original/netflix-logo-transparent-free-png.png"
        alt="logo"
      />

      <div className="search__container">
        <input className="search__bar" placeholder="Search"></input>

        <img
          className="search__button"
          src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
        />
      </div>

      <ul className="Navbar__list">
        {links.map((link) => (
          <li key={link.id}>{link.url}</li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
