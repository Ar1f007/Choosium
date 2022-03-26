import { useState } from 'react';
import Cards from './components/Cards-container/CardsContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleSelect = (newPlayer) => {
    // check if the current selected player
    // already exists in the selected players list
    const alreadyExists = selectedPlayer.find((player) => player.id === newPlayer.id);
    if (alreadyExists) return;

    const newList = [...selectedPlayer, newPlayer];
    setSelectedPlayer(newList);
  };

  console.log(selectedPlayer);
  return (
    <>
      <header>
        <h1>Choosium</h1>
        <p className="subtitle">😍 Pick your dream front line 😍</p>
      </header>
      <main>
        <Cards handleSelect={handleSelect} />
        <Sidebar playersList={selectedPlayer} />
      </main>
    </>
  );
}

export default App;
