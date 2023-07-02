import { useEffect } from "react";

 



function Child() {
    function handleClick(event) {
      console.log("Child clicked");
    }
  
    return <div onClick={handleClick}>Child</div>;
  }
  
  function Parent() {
    function handleClick(event) {
      console.log("Parent clicked");
    }
  
    return (
      <div onClick={handleClick} capture>
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
      <div onClick={handleClick} capture>
        GrandParent
        <Parent />
      </div>
    );
  }
  
  export default function EventCapturing() {
    function handleClick(event) {
      console.log("Window clicked");
    }
  
    useEffect(() => {
      window.addEventListener("click", handleClick, true);
      return () => {
        window.removeEventListener("click", handleClick, true);
      };
    }, []);
  
    return (
      <div>
        <GrandParent />
      </div>
    );
  }
  