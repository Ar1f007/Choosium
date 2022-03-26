import './sidebar.css';

const Sidebar = ({ playersList }) => {
  return (
    <div className="sidebar">
      <h2>Your Selection</h2>
      <div className="players-list">
        {playersList.map((player) => (
          <div className="player" key={player.id}>
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="btn choose-again-btn btn-block">Choose Again</button>
        <button className="btn select-randomly-btn btn-block">Random Select</button>
      </div>
    </div>
  );
};
export default Sidebar;
