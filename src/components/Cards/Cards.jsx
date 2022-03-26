import { useEffect, useState } from 'react';
import './cards.css';
const Cards = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('mock-data.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cards-container">
      <div className="card">
        <img
          src="https://mundoalbiceleste.com/wp-content/uploads/2019/11/messidortmund.jpg"
          alt="Messi"
        />

        <div className="info">
          <h3>Lionel Messi</h3>
          <p>
            <small>Nationality: </small> Argentina
          </p>
          <p>
            <small>Net Worth:</small> €60.00
          </p>
          <button className="btn-add btn">Add to list</button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://mundoalbiceleste.com/wp-content/uploads/2019/11/messidortmund.jpg"
          alt="Messi"
        />

        <div className="info">
          <h3>Lionel Messi</h3>
          <p>
            <small>Nationality: </small> Argentina
          </p>
          <p>
            <small>Net Worth:</small> €60.00
          </p>
          <button className="btn-add btn">Add to list</button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://mundoalbiceleste.com/wp-content/uploads/2019/11/messidortmund.jpg"
          alt="Messi"
        />

        <div className="info">
          <h3>Lionel Messi</h3>
          <p>
            <small>Nationality: </small> Argentina
          </p>
          <p>
            <small>Net Worth:</small> €60.00
          </p>
          <button className="btn-add btn">Add to list</button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
