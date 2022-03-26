import './card.css';

const Player = ({ playerInfo, handleSelect }) => {
  const { id, name, image, country, marketValue } = playerInfo;

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
          Add to list
        </button>
      </div>
    </div>
  );
};
export default Player;
