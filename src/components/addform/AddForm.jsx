import React, { useState } from "react";
import Send from "../images/send.png";

function AddForm(props) {
  const [inputValue, setInputValue] = useState("");
  const { handleAdd } = props;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    handleAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>New Note</h1>
      <div>
        <textarea
          onChange={handleChange}
          rows="7"
          cols="50"
          value={inputValue}
        />
        <button className="send">
          <img src={Send} alt="send" width="30px" height="25px" />
        </button>
      </div>
    </form>
  );
}

export default AddForm;
