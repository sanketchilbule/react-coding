import React, { useState } from "react";

function PreventDefault() {
  const [inputText, setInputText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // prevent form from reloading
    alert("Input text: " + inputText);
  }

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="myInput">Enter Text:</label>
        <input type="text" id="myInput" value={inputText} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PreventDefault;
