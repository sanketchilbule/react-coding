import React, { useState } from "react";

const EnterkeyPress = () => {
  const [inputText, setInputText] = useState("");
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      // key "Enter" was pressed
      alert("You pressed Enter key. Input text: " + inputText);
      console.log("Input text: " + inputText);
    }
  }

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default EnterkeyPress;
