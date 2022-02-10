import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = (props) => {
  
  const {level} = props;
  return (
    <div className="audio-game">
      <div className="main-overlay"></div>
      <div className="game-controls">
        <NavLink to="/audio-translate-game">Перевод слова</NavLink>
        <NavLink to="/audio-find-game">Слово в предложении</NavLink>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default Main;
