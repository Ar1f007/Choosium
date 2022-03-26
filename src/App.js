import { useState } from 'react';

import Cards from './components/Cards-container/CardsContainer';
import Questions from './components/Questions/Questions';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const onClickAddToList = (newPlayer) => {
    // check if the current selected player
    // already exists in the selected players list
    const alreadyExists = selectedPlayer.find((player) => player.id === newPlayer.id);
    if (alreadyExists) return;

    const newList = [...selectedPlayer, newPlayer];
    setSelectedPlayer(newList);
  };

  const onChooseAgainClick = () => {
    setSelectedPlayer([]);
  };

  const onRandomSelectClick = () => {
    const randomIndexValue = Math.floor(Math.random() * selectedPlayer.length);
    const randomPlayer = selectedPlayer[randomIndexValue];
    setSelectedPlayer([randomPlayer]);
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
          handleChooseAgain={onChooseAgainClick}
          chooseOnePlayerRandomly={onRandomSelectClick}
        />

        <Questions />
      </main>
    </>
  );
}

export default App;
