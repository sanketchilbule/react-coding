import React, { useState } from 'react';

const  Radiobtn = () => {
  const [selectedOption, setSelectedOption] = useState('weekend');
  const [selectedGame, setSelectedGame] = useState(null);
// 
  const weekdaysGames = ['Chess', 'Solitaire', 'Backgammon'];
  const weekendGames = ['Poker', 'Monopoly', 'Scrabble'];
//   
  const games = selectedOption === 'weekday' ? weekdaysGames : weekendGames;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className="game-selection">
      <h3>When do you want to play games?</h3>
      <div>
        <input
          type="radio"
          id="weekday"
          value="weekday"
          checked={selectedOption === 'weekday'}
          onChange={handleOptionChange}
        />
        <label htmlFor="weekday">Weekdays</label>
      </div>
      <div>
        <input
          type="radio"
          id="weekend"
          value="weekend"
          checked={selectedOption === 'weekend'}
          onChange={handleOptionChange}
        />
        <label htmlFor="weekend">Weekends</label>
      </div>
      <h3>Which game do you want to play?</h3>
      <div>
        {games.map((game, index) => (
          <div key={index}>
            <input
              type="radio"
              id={game}
              value={game}
              checked={selectedGame === game}
              onChange={handleGameChange}
            />
            <label htmlFor={game}>{game}</label>
          </div>
        ))}
      </div>
      <p>You have selected: {selectedOption} and {selectedGame}</p>
    </div>
  );
};

export default Radiobtn
