import React, { useState } from "react";

const Debouncing = () => {
    const [debounce, setDebounce] = useState()
  const myDebounce = (cb, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const handleChange = myDebounce((e) => {
    // console.log(e.target.value);
    setDebounce(e.target.value)
  }, 1000);
  return (
    <div>
      <input type="text" placeholder="add data" onChange={handleChange} />
    <h2>{debounce}</h2>  
    </div>
  );
};

export default Debouncing;
