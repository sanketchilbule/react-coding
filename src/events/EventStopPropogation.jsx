import { useEffect } from "react";

function Child() {
    function handleClick(event) {
      event.stopPropagation();
      console.log("Child clicked");
    }
  
    return <div onClick={handleClick}>Child</div>;
  }
  
  function Parent() {
    function handleClick(event) {
      console.log("Parent clicked");
    }
  
    return (
      <div onClick={handleClick}>
        Parent
        <Child />
      </div>
    );
  }
  
  function GrandParent() {
    function handleClick(event) {
      console.log("GrandParent clicked");
    }
  
    return (
      <div onClick={handleClick}>
        GrandParent
        <Parent />
      </div>
    );
  }
  
  export default function EventStopPropogation() {
    function handleClick(event) {
      console.log("Window clicked");
    }
  
    useEffect(() => {
      window.addEventListener("click", handleClick);
      return () => {
        window.removeEventListener("click", handleClick);
      };
    }, []);
  
    return (
      <div>
        <GrandParent />
      </div>
    );
  }
  