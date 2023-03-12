import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchLoading = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState("");
  const url = "https://dummyjson.com/carts";

  //
  // useEffect(() => {
  //     axios.get("https://dummyjson.com/carts/1").then((res) => {
  //       const newTotal = res.data.products.reduce((acc, curr) => {
  //         return acc + curr.total;
  //       }, 0);
  //       setTotal(newTotal);
  //       setData(res.data.products);
  //       // console.log(res.data.products)
  //     });
  //   }, []);
  //
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
          console.log(res.data.carts)
        let newTotal = res.data.carts.reduce((acc, curr) => {
          return acc + curr.total;
        }, 0);
        setTotal(newTotal);
        setData(res.data.carts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.length &&
        data.map((elem, index) => {
          return <p key={elem.id}> {elem.total}</p>;
        })}

      <p>total : {total}</p>
    </div>
  );
};

export default FetchLoading;
