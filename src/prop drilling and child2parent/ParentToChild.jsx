// 
import React, { useState } from 'react'
// child
const Display = props => <p>{props.message}</p>;


// parent
const Input = props => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input type="text" value={message} onChange={handleChange} />
      <Display message={message} /> 
      
    </>
  );
};

const ParentToChild = () => {
  return (
    <div>
      <Input />
    </div>
  );
};
export default ParentToChild