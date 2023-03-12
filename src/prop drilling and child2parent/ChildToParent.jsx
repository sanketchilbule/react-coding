// 

import React from 'react'
const Display = props => <p>{props.message}</p>;

const Input = props => {
  const [message, setMessage] = React.useState('');

  const handleChange = e => {
    setMessage(e.target.value);
    props.onMessageChange(e.target.value);
  };

  return (
    <>
      <input type="text" value={message} onChange={handleChange} />
      <Display message={message} />
    </>
  );
};

const ChildToParent= () => {
    const [message, setMessage] = React.useState('');
  
    const handleMessageChange = message => {
      setMessage(message);
    };
  
    return (
      <div>
        <Input onMessageChange={handleMessageChange} />
        <p>Message from parent: {message}</p>
      </div>
    );
  };
  

export default ChildToParent


//  

// const Display = props => <p>{props.message}</p>;

// const Input = props => {
//   const [message, setMessage] = React.useState('');

//   const handleChange = e => {
//     setMessage(e.target.value);
//     props.onMessageChange(e.target.value);
//   };

//   return (
//     <>
//       <input type="text" value={message} onChange={handleChange} />
//       <Display message={message} />
//     </>
//   );
// };

// const App = () => {
//   const [message, setMessage] = React.useState('');

//   const handleMessageChange = message => {
//     setMessage(message);
//   };

//   return (
//     <div>
//       <Input onMessageChange={handleMessageChange} />
//       <p>Message from parent: {message}</p>
//     </div>
//   );
// };


// In this example, we added a callback function onMessageChange to the Input component. This callback is passed down to the Input component as a prop from the parent component, App. The Input component calls the callback function onMessageChange every time the message changes, passing the new message as an argument. The parent component receives the new message and updates its state accordingly.

// This allows us to pass data from the child component, Input, to the parent component, App, without having to drill the props down multiple levels.