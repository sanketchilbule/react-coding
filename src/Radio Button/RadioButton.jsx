import React, { useState } from "react";

//
const options = ["cricket", "football", "tennis"];
const days = ["weekdays", "weekends"];

const RadioButton = () => {
  const [game, setGame] = useState();
  const [time, setTime] = useState();
  return (
    <div>
      <h3>which game u will prefer</h3>
      {options.map((elem, id) => {
        return (
          <>
            <label htmlFor="cricket" key={elem.id}>{elem}</label>
            <input
              type="radio"
              name="cricket"
              id="cricket"
              value={elem}
              onChange={(e) => setGame(e.target.value)}
            />
            <br />
          </>
        );
      })}
      <h3>which time u will prefer</h3>
      {days.map((elem1, id) => {
        return (
          <>
            <label htmlFor="elem" key={elem1.id}>{elem1}</label>
            <input
              type="radio"
              name="time"
              id="elem1"
              value={elem1}
              onChange={(e) => setTime(e.target.value)}
            />
            <br />
          </>
        );
      })}

      {
        <h2>
          {game} on {time}
        </h2>
      }
    </div>
  );
};

export default RadioButton;

//
