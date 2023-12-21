import { useState } from "react";
import "./index.css";

// Functional component !== class component (OOP)
// Controlled Components => Necessari quando create una form
const AddPost = ({ setPostListData }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();

    setPostListData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: inputValue,
        body: textareaValue,
        userId: 99,
        tags: ["coding", "bootcamp"],
        reactions: 999,
      },
    ]);

    onHandleClear();
  };

  const onHandleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleTextareaValue = (event) => {
    setTextareaValue(event.target.value);
  };

  const onHandleClear = () => {
    setInputValue("");
    setTextareaValue("");
  };

  return (
    <form className="AddPost" onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Inserisci titolo"
        value={inputValue}
        onChange={onHandleInputValue}
      />
      <textarea
        rows="6"
        placeholder="Digita qualcosa di sensazionale"
        value={textareaValue}
        onChange={onHandleTextareaValue}
      ></textarea>

      <div className="newPost__buttons">
        <div className="addElements__barButtons">
          <button alt="add image ">
            <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/full-image.png" />
          </button>
          <button alt="add gif">
            <img src="https://img.icons8.com/ios/25/FFFFFF/gif--v1.png" />
          </button>
          <button alt="share">
            <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/share--v1.png" />
          </button>
          <button alt="random unicorn">
            <img src="https://img.icons8.com/ios/25/FFFFFF/unicorn--v2.png" />
          </button>
        </div>
        <div className="AddPost__btns">
          <input className="addPost" type="submit" value="New post" />
          <button className="clearAll" onClick={onHandleClear}>
            <img
              src="https://img.icons8.com/ios/25/FFFFFF/broom.png"
              alt="clear all"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
