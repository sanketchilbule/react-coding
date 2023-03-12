import React, { useEffect, useState } from "react";

const Effecthook = () => {
  const [tab, setTab] = useState("images");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("componentWillUnmount");
    };
  }, [tab]);
  return (
    <div>
      <button onClick={() => setTab("images")}>images</button>
      <button onClick={() => setTab("videos")}>videos</button>
      <button onClick={() => setCount(count + 1)}>count</button>

      {tab === "images" && <span>photos</span>}
      {tab === "videos" && <span>videos</span>}
      {count}
    </div>
  );
};

export default Effecthook;
