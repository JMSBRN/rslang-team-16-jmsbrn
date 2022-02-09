import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="audio-game">
      <div className="game-controls">
        <NavLink to="/audio-translate-game">Перевод слова</NavLink>
        <NavLink to="/audio-find-game">Слово в предложении</NavLink>
      </div>
    </div>
  );
};

export default Main;
