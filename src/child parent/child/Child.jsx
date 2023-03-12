// // In the Child component, we can access the message prop and call the handleData function to pass data back to the parent:

 
// function Child({ message, handleData }) {
//   const handleClick = () => {
//     handleData("Data passed back to parent!");
//   }

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick}>Pass Data to Parent</button>
//     </div>
//   );
// }

// export default Child

// // In this example, when the button is clicked, the handleClick function is called, which calls the handleData function passed in as a prop, passing the data back to the parent.

 import React from 'react'
 
 const Child = ({message,handleData}) => {
const handleClick =()=> {
  handleData("parent got the data")
}
   return (
     <div>
     <p>
      {message}
     </p>
       <button onClick={handleClick}> click</button>
     </div>
   )
 }
 
 export default Child
 