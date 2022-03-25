import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('mock-data.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>App</div>;
}

export default App;
