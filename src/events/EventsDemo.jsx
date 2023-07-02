import React, { useState } from "react";

function EventsDemo() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  function handleImageMouseOver() {
    setIsImageHovered(true);
  }

  function handleImageMouseOut() {
    setIsImageHovered(false);
  }

  function handleButtonSingleClick() {
    console.log("Button clicked");
  }

  function handleButtonDoubleClick() {
  alert("Button double-clicked");
  }

  function handleInputFocus() {
    console.log("Focused on the textbox");
  }

  function handleInputBlur() {
    console.log("Out of the textbox");
  }

  function handleTextCopy() {
    alert("Text copied");
  }

  function handleTextCut() {
    alert("Text cut");
  }

  function handleTextPaste() {
    alert("Text pasted");
  }

  return (
    <div>
      <img
        src="https://via.placeholder.com/350x150"
        alt="Placeholder"
        style={{ width: isImageHovered ? "400px" : "350px" }}
        onMouseOver={handleImageMouseOver}
        onMouseOut={handleImageMouseOut}
      />
      <br />
      <button onDoubleClick={handleButtonDoubleClick} onClick={handleButtonSingleClick}>
        Click Me
      </button>
      <br />
      <input type="text" onFocus={handleInputFocus} onBlur={handleInputBlur} />
      <br />
      <div className="cutCopyPaste" style={{border:"1px solid grey" ,margin:"20px"}}>
      <p onCopy={handleTextCopy} onCut={handleTextCut} onPaste={handleTextPaste}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </p>
      </div>
      <button onDoubleClick={handleButtonDoubleClick} >
        dblClick Me
      </button>
      {/* onDoubleClick works when your dev tool is not opened */}
    </div>
  );
}

export default EventsDemo;
