import './sidebar.css';

import { GiCardPickup } from 'react-icons/gi';
import { AiOutlineUndo } from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';

// Shows selected player on the sidebar
const Sidebar = ({ playersList, handleChooseAgain, chooseOnePlayerRandomly, handleRemove }) => {
  return (
    <div className="sidebar">
      <h2>Your Selection</h2>
      <div className="players-list">
        {playersList.map((player) => (
          <div className="player" key={player.id}>
            <img src={player.image} alt={player.name} />
            <h3>
              {player.name}
              <span onClick={() => handleRemove(player)}>
                <RiDeleteBack2Line />
              </span>
            </h3>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="btn btn-block choose-again-btn" onClick={handleChooseAgain}>
          Choose Again <AiOutlineUndo className="icon" />
        </button>
        <button className="btn btn-block choose-one-btn" onClick={chooseOnePlayerRandomly}>
          Choose 1 for me <GiCardPickup className="icon" />
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
