// import React, { useState } from "react";

// const ChildToParent = () => {
//   const [message, setMessage] = useState("heloo ");
//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };
//   return (
//     <div>
//       <ChildOne message={message} handleMessage={handleMessage} />
//     </div>
//   );
// };

// function ChildOne({ message, handleMessage }) {
//   const handleClick = (e) => {
//     handleMessage(e.target.value);
//   };
//   return (
//     <>
//       {message}
//       <input type="text" onChange={handleMessage} />
//       <button onClick={handleClick}>click</button>
//     </>
//   );
// }

// export default ChildToParent;

//

import React, { useState } from "react";

function ParentComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (data) => {
    console.log("Data from child component: ", data);
    // setInputValue(data);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInput} />
      <ChildComponent inputValue={inputValue} onSubmit={handleSubmit} />
       
    </div>
  );
}

function ChildComponent(props) {
  const handleClick = () => {
    props.onSubmit(props.inputValue);
  };

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
      {/* {props.inputValue} */}
    </div>
  );
}

export default ParentComponent;
