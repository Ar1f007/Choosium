import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('mock-data.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <h1>Choosium</h1>
        <p>😍 Pick your dream front line 😍</p>
      </header>
    </>
  );
}

export default App;
