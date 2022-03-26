import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Your Selection</h2>
      <div className="players-list">
        <div className="player">
          <img
            src="https://mundoalbiceleste.com/wp-content/uploads/2019/11/messidortmund.jpg"
            alt="messi"
          />
          <h3>Zlatan Ibrahimovic</h3>
        </div>
        <div className="player">
          <img
            src="https://mundoalbiceleste.com/wp-content/uploads/2019/11/messidortmund.jpg"
            alt="messi"
          />
          <h3>Robert Lewandowski</h3>
        </div>
      </div>
      <div className="actions">
        <button className="btn choose-again-btn btn-block">Choose Again</button>
        <button className="btn select-randomly-btn btn-block">Random Select</button>
      </div>
    </div>
  );
};
export default Sidebar;
