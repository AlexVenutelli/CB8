import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/copyright");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`book/${searchBook}`);
  };

  return (
    <div className={styles.Homepage}>
      <div className={styles.Navbar}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Cerca un libro..."
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
          />
          <button type="submit">Cerca</button>
        </form>
        <button onClick={handleClick}>copyright</button>
      </div>

      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
