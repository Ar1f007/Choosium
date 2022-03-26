import { useEffect, useState } from 'react';

import Player from './Card/Card';
import './cards-container.css';

const Cards = ({ handleSelect }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('mock-data.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cards-container">
      {players.map((player) => (
        <Player key={player.id} playerInfo={player} handleSelect={handleSelect} />
      ))}
    </div>
  );
};
export default Cards;
