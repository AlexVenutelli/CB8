import { useState } from "react";
import AddTodoInputCSS from "./addTodoInput.module.scss";

const AddTodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className={AddTodoInputCSS.addTodoInput} onSubmit={onHandleSubmit}>
      <input
        className={AddTodoInputCSS.input}
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="inserisci il testo qui"
      />
      <button className={AddTodoInputCSS.btn} type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodoInput;
