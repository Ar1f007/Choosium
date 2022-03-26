import { MdOutlinePlaylistAdd } from 'react-icons/md';

import './card.css';

const Player = ({ playerInfo, handleSelect }) => {
  const { name, image, country, marketValue } = playerInfo;

  return (
    <div className="card">
      <img src={image} alt={name} />

      <div className="info">
        <h3>{name}</h3>
        <p>
          <small>Nationality: </small> {country}
        </p>
        <p>
          <small>Market Value:</small> €{marketValue}
        </p>
        <button className="btn-add btn" onClick={() => handleSelect(playerInfo)}>
          Add to list <MdOutlinePlaylistAdd className="icon" />
        </button>
      </div>
    </div>
  );
};
export default Player;
