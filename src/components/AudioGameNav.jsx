import { NavLink } from "react-router-dom";
import "./AudioGameNav.css";
import { ImHome3 } from "react-icons/im";
import { VscUnmute } from "react-icons/vsc";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";


const AudioGameNav = (props) => {
  
  const {star,score} =  props;
  
  const getFullScreen = () => {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  };

  return (
    <div className="audio-game-nav" id="game-field">
      <div className="audio-nav-controls">
        <button className="mute" onClick={()=>{}}><VscUnmute/></button>
        <button className="fullscreen" onClick={()=> {getFullScreen()}}><RiFullscreenFill/></button>
      </div>
      <div className="audio-nav-close">
        <p>ball: {score}</p>
        <div className="audio-shots">
          <span className={star>=5?'yash':'qzil'}></span>
          <span className={star>=4?'yash':'qzil'}></span>
          <span className={star>=3?'yash':'qzil'}></span>
          <span className={star>=2?'yash':'qzil'}></span>
          <span className={star>=1?'yash':'qzil'}></span>
        </div>
        
          <NavLink to="/"><button className="fullscreen"><ImHome3/></button></NavLink>
        
      </div>
    </div>
  );
};

export default AudioGameNav;
