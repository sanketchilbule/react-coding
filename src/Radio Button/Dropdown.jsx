// 
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('weekend');
  const [selectedGame, setSelectedGame] = useState('');

  const weekdaysGames = ['Chess', 'Solitaire', 'Backgammon'];
  const weekendGames = ['Poker', 'Monopoly', 'Scrabble'];
  const games = selectedOption === 'weekday' ? weekdaysGames : weekendGames;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedGame('');
  };

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className="game-selection">
      <h3>When do you want to play games?</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="weekday">Weekdays</option>
        <option value="weekend">Weekends</option>
      </select>
      <h3>Which game do you want to play?</h3>
      <select value={selectedGame} onChange={handleGameChange}>
        <option value="">Select a Game</option>
        {games.map((game, index) => (
          <option key={index} value={game}>{game}</option>
        ))}
      </select>
      {selectedGame && (
        <p>You have selected: {selectedGame}</p>
      )}
    </div>
  );
};

export default Dropdown


// 

// import React, { useState } from 'react';

// const  Dropdown = () => {
//   const [selectedOption, setSelectedOption] = useState('weekend');

//   const weekdaysGames = ['Chess', 'Solitaire', 'Backgammon'];
//   const weekendGames = ['Poker', 'Monopoly', 'Scrabble'];
//   const games = selectedOption === 'weekday' ? weekdaysGames : weekendGames;

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="game-selection">
//       <h3>When do you want to play games?</h3>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="weekday">Weekdays</option>
//         <option value="weekend">Weekends</option>
//       </select>
//       <h3>Which game do you want to play?</h3>
//       <ul>
//         {games.map((game, index) => (
//           <li key={index}>{game}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown
