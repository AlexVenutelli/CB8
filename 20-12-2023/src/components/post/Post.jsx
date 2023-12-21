import "./index.css";
import { useState, useEffect } from "react";

const Post = ({ postData }) => {
  const { userId, title, body, tags, reactions } = postData;
  const [userIdData, setUserIdData] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserIdData(data));
  }, [userId]);

  return (
    <div className="Post">
      <div className="user__profile">
        <div className="user__profile--container">
          <img
            className="image__profile"
            src={userIdData?.image}
            alt="profile__image"
          />
          <h2>{`${userIdData?.firstName} ${userIdData?.lastName}`}</h2>
        </div>

        <button className="menu-button">
          <img
            src="https://img.icons8.com/ios/25/FFFFFF/menu-2.png"
            alt="menu-2"
          />
        </button>
      </div>
      <div className="title__bar">
        <h3 className="Post__title">{title}</h3>
      </div>

      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--like">
          <span>
            <img src="https://img.icons8.com/color/20/filled-like.png" />
          </span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="hashtag">#</span>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
