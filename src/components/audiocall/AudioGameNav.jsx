import { NavLink } from "react-router-dom";
import { useState } from "react";
import '../audiocall/AudioGameNav.css';

import { ImHome3 } from "react-icons/im";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";

const AudioGameNav = (props) => {
  const { star, score, isMute, setMute} = props;
  const [fullscreen, setFulscreen] = useState(false);

  const getFullScreen = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
      ) {
      setFulscreen(true);
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      setFulscreen(false);
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };
  
  const getToggleSound = () => {
    !isMute ? setMute(true) : setMute(false);
  }

  return (
    <div className="audio-game-nav" id="game-field">
      <div className="audio-nav-controls">
        <button className="mute" onClick={() => {getToggleSound()}}>
          {!isMute ? <VscUnmute /> : <VscMute/>}
        </button>
        <button
          className="fullscreen"
          onClick={() => {
            getFullScreen();
          }}
        >
          {!fullscreen ? <RiFullscreenFill/> : <RiFullscreenExitFill/>}
        </button>
      </div>
      <div className="audio-nav-close">
        <p>score: {score}</p>
        <div className="audio-shots">
          <span className={star >= 5 ? "green-heart" : "red-heart"}></span>
          <span className={star >= 4 ? "green-heart" : "red-heart"}></span>
          <span className={star >= 3 ? "green-heart" : "red-heart"}></span>
          <span className={star >= 2 ? "green-heart" : "red-heart"}></span>
          <span className={star >= 1 ? "green-heart" : "red-heart"}></span>
        </div>

        <NavLink to="/">
          <button className="fullscreen">
            <ImHome3 />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AudioGameNav;
