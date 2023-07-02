import React, { useState } from "react";

function ChildComponent1({ isPlaying, togglePlay }) {
  return (
    <div>
      <p>Song is {isPlaying ? "playing" : "paused"}</p>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

function ChildComponent2({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

function LiftingStateUp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");

  function playSong() {
    setIsPlaying(true);
    setMessage("Playing song");
  }

  function pauseSong() {
    setIsPlaying(false);
    setMessage("Song paused");
  }

  function togglePlay() {
    isPlaying ? pauseSong() : playSong();
  }

  return (
    <div>
      <ChildComponent1 isPlaying={isPlaying} togglePlay={togglePlay} />
      <ChildComponent2 message={message} />
    </div>
  );
}

export default LiftingStateUp;
