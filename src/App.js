import { useState } from 'react';

import Cards from './components/Cards-container/CardsContainer';
import Questions from './components/Questions/Questions';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  // Adds player to the selected player list
  const onClickAddToList = (newPlayer) => {
    if (selectedPlayer.length > 2) {
      alert('Can not pick more than 3 players');
      return;
    }
    // check if the current selected player
    // already exists in the selected players list
    const alreadyExists = selectedPlayer.find((player) => player.id === newPlayer.id);
    if (alreadyExists) return;

    const newList = [...selectedPlayer, newPlayer];
    setSelectedPlayer(newList);
  };

  // Clears the selected player array
  const onChooseAgainButtonClick = () => {
    setSelectedPlayer([]);
  };

  // Randomly selects a player from selected players list
  const onChooseOneForMeButtonClick = () => {
    if (selectedPlayer.length === 0) return;
    const randomIndexValue = Math.floor(Math.random() * selectedPlayer.length);
    const randomPlayer = selectedPlayer[randomIndexValue];
    setSelectedPlayer([randomPlayer]);
  };

  // Filter out players on clicking remove/x icon
  const onRemoveIconClick = (removePlayer) => {
    const filterPlayer = selectedPlayer.filter((player) => player.id !== removePlayer.id);

    setSelectedPlayer(filterPlayer);
  };

  return (
    <>
      <header>
        <h1>Choosium</h1>
        <p className="subtitle">😍 Pick your dream front line 😍</p>
      </header>
      <main>
        <Cards handleSelect={onClickAddToList} />
        <Sidebar
          playersList={selectedPlayer}
          handleChooseAgain={onChooseAgainButtonClick}
          chooseOnePlayerRandomly={onChooseOneForMeButtonClick}
          handleRemove={onRemoveIconClick}
        />

        <Questions />
      </main>
    </>
  );
}

export default App;
