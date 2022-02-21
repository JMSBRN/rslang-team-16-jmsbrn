
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Main.css'
// import Alt from "../audiogame/Alt";

const Main = () => {
  const [levelId, setLevelId] = useState(1);
  
  return (
    <div className="audio-game">
      <div className="main-overlay"></div>
      <div className="game-controls">
        <NavLink to={`/audio-translate-game/${levelId}`}>Перевод слова</NavLink>
        <NavLink to={`/audio-find-game/${levelId}`}>Слово в предложении</NavLink>
        <select name="" id="" onChange={(e)=>setLevelId(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      {/* <Alt/> */}
    </div>
  );
};

export default Main;
