import React, { useState } from "react";
// child to parent data passing.

// Parent.jsx
// 
function ParentColor() {
 const [colors, setColors] = useState("");

  const getColor = (e) => {
    setColors(e.target.value);
  };
  return (
    <div>
      {/* <h2 style={{ color: colors }}>changed color</h2> */}
      <div className="box" style={{backgroundColor:colors}}> box</div>
      <ColorChild getColor={getColor} />
    </div>
  );
}

// Child.jsx
const ColorChild = ({ getColor }) => {
  return (
    <div>
      <input type="text" onChange={getColor}  placeholder="add color to display"/>
    </div>
  );
};

export default ParentColor;
