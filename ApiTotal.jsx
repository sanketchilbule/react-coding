import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiTotal = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("https://dummyjson.com/carts/1").then((res) => {
      const newTotal = res.data.products.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
      setTotal(newTotal);
      setData(res.total);
    }, 0);
  }, []);

  return (
    <div>
    {
      data.map((elem,id)=>{
        return <p key={elem}> {elem.total}</p>
      })
    }
      <div> total : {total}</div>
    </div>
  );
};

export default ApiTotal;
