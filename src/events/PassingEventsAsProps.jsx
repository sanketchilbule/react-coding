import React from "react";

function ChildComponent({ onPlay, message }) {
  function handlePlay() {
    onPlay();
    console.log(message);
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

function PassingEventsAsProps() {
  function playSong() {
    console.log("Song is playing...");
  }

  return (
    <div>
      <ChildComponent onPlay={playSong} message="Playing song" />
    </div>
  );
}

export default PassingEventsAsProps;
