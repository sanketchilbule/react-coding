// // In React, data can be passed from a child component to a parent component using the props system, even when using functional components.

// import { useState } from "react";
// import Child from "./child/Child";

// // For example, consider a parent component called Parent and a child component called Child. In the Parent component, we can pass a piece of data as a prop to the Child component:


// function Parent() {
//   const [message, setMessage] = useState("Hello, World!");

//   const handleChildData = (data) => {
//     setMessage(data);
//   };

//   return <Child message={message} handleData={handleChildData} />;
// }
// export default Parent;


import React, { useState } from 'react'
import Child from "./child/Child"
const Parent = () => {
const [message, setMessage] = useState("hello parent");

const handleChildData =(data)=>{
  setMessage(data)
}

  return (
    <div>

      parent
      <Child message={message} handleData={handleChildData}/>
    </div>
  )
}

export default Parent