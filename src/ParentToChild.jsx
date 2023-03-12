import React from "react";

function Child(props) {
  return (
    <>
      <p>{props.name}</p>
    </>
  );
}
const ParentToChild = () => {
  return (
    <div>
      <Child name="sanket" />
      <Child name="sahil" />
    </div>
  );
};

export default ParentToChild;
